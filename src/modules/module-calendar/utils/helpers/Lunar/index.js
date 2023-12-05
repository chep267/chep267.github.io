export class VietnameseDateException extends Error {
    constructor(message) {
        super(message);
    }
}
function Int(a) {
    return Math.floor(a);
}
/**
 * Trả về số ngày tính từ ngày 1 tháng 1 năm 4713 trước công nguyên (theo lịch Julian)
 */
function JdFromDate(dd, mm, yy) {
    const a = Int((14 - mm) / 12);
    const y = yy + 4800 - a;
    const m = mm + 12 * a - 3;
    let jd = dd + Int((153 * m + 2) / 5) + 365 * y + Int(y / 4) - Int(y / 100) + Int(y / 400) - 32045;
    if (jd < 2299161) {
        jd = dd + Int((153 * m + 2) / 5) + 365 * y + Int(y / 4) - 32083;
    }
    return jd;
}
function JdToDate(jd) {
    let b, c;
    if (jd > 2299160) {
        // After 5/10/1582, Gregorian calendar
        const a = jd + 32044;
        b = Int((4 * a + 3) / 146097);
        c = a - Int((b * 146097) / 4);
    } else {
        b = 0;
        c = jd + 32082;
    }
    const d = Int((4 * c + 3) / 1461);
    const e = c - Int((1461 * d) / 4);
    const m = Int((5 * e + 2) / 153);
    const day = e - Int((153 * m + 2) / 5) + 1;
    const month = m + 3 - 12 * Int(m / 10);
    const year = b * 100 + d - 4800 + Int(m / 10);
    return new Date(year, month - 1, day);
}
/**
 * Tính ngày Sóc
 */
function GetNewMoonDay(k, timeZone) {
    const t = k / 1236.85;
    const t2 = t * t;
    const t3 = t2 * t;
    const dr = Math.PI / 180;
    const jd1 =
        2415020.75933 +
        29.53058868 * k +
        0.0001178 * t2 -
        0.000000155 * t3 +
        0.00033 * Math.sin((166.56 + 132.87 * t - 0.009173 * t2) * dr); // Mean new moon
    const m = 359.2242 + 29.10535608 * k - 0.0000333 * t2 - 0.00000347 * t3;
    const mpr = 306.0253 + 385.81691806 * k + 0.0107306 * t2 + 0.00001236 * t3;
    const f = 21.2964 + 390.67050646 * k - 0.0016528 * t2 - 0.00000239 * t3;
    const c1 =
        (0.1734 - 0.000393 * t) * Math.sin(m * dr) +
        0.0021 * Math.sin(2 * dr * m) -
        0.4068 * Math.sin(mpr * dr) +
        0.0161 * Math.sin(dr * 2 * mpr) -
        0.0004 * Math.sin(dr * 3 * mpr) +
        0.0104 * Math.sin(dr * 2 * f) -
        0.0051 * Math.sin(dr * (m + mpr)) -
        0.0074 * Math.sin(dr * (m - mpr)) +
        0.0004 * Math.sin(dr * (2 * f + m)) -
        0.0004 * Math.sin(dr * (2 * f - m)) -
        0.0006 * Math.sin(dr * (2 * f + mpr)) +
        0.001 * Math.sin(dr * (2 * f - mpr)) +
        0.0005 * Math.sin(dr * (2 * mpr + m));
    const deltaT =
        t < -11
            ? 0.001 + 0.000839 * t + 0.0002261 * t2 - 0.00000845 * t3 - 0.000000081 * t * t3
            : -0.000278 + 0.000265 * t + 0.000262 * t2;
    const jdNew = jd1 + c1 - deltaT;
    return Int(jdNew + 0.5 + timeZone / 24);
}
/**
 * Tính tọa độ mặt trời
 */
function GetSunLongitude(jdn, timeZone) {
    const t = (jdn - 2451545.5 - timeZone / 24) / 36525;
    const t2 = t * t;
    const dr = Math.PI / 180;
    const m = 357.5291 + 35999.0503 * t - 0.0001559 * t2 - 0.00000048 * t * t2;
    const l0 = 280.46645 + 36000.76983 * t + 0.0003032 * t2;
    const dl =
        (1.9146 - 0.004817 * t - 0.000014 * t2) * Math.sin(dr * m) +
        (0.019993 - 0.000101 * t) * Math.sin(dr * 2 * m) +
        0.00029 * Math.sin(dr * 3 * m);
    let l = l0 + dl;
    l *= dr;
    l -= Math.PI * 2 * Int(l / (Math.PI * 2)); // Normalize to (0, 2*PI)
    return Int((l / Math.PI) * 6);
}
/**
 * Tìm ngày bắt đầu tháng 11 âm lịch
 */
function GetLunarMonth11(yy, timeZone) {
    const off = JdFromDate(31, 12, yy) - 2415021;
    const k = Int(off / 29.530588853);
    let nm = GetNewMoonDay(k, timeZone);
    const sunLong = GetSunLongitude(nm, timeZone);
    if (sunLong >= 9) {
        nm = GetNewMoonDay(k - 1, timeZone);
    }
    return nm;
}
function GetLeapMonthOffset(a11, timeZone) {
    let last;
    const k = Int((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    let i = 1;
    let arc = GetSunLongitude(GetNewMoonDay(k + i, timeZone), timeZone);
    do {
        last = arc;
        i++;
        arc = GetSunLongitude(GetNewMoonDay(k + i, timeZone), timeZone);
    } while (arc !== last && i < 14);
    return i - 1;
}
function ConvertSolar2Lunar(yy, mm, dd, timeZone = 7.0) {
    const dayNumber = JdFromDate(dd, mm, yy);
    const k = Int((dayNumber - 2415021.076998695) / 29.530588853);
    let monthStart = GetNewMoonDay(k + 1, timeZone);
    if (monthStart > dayNumber) {
        monthStart = GetNewMoonDay(k, timeZone);
    }
    let a11 = GetLunarMonth11(yy, timeZone);
    let b11 = a11;
    let lunarYear;
    if (a11 >= monthStart) {
        lunarYear = yy;
        a11 = GetLunarMonth11(yy - 1, timeZone);
    } else {
        lunarYear = yy + 1;
        b11 = GetLunarMonth11(yy + 1, timeZone);
    }
    const lunarDay = dayNumber - monthStart + 1;
    const diff = Int((monthStart - a11) / 29);
    let lunarLeap = 0;
    let lunarMonth = diff + 11;
    if (b11 - a11 > 365) {
        const leapMonthDiff = GetLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthDiff) {
            lunarMonth = diff + 10;
            if (diff === leapMonthDiff) {
                lunarLeap = 1;
            }
        }
    }
    if (lunarMonth > 12) {
        lunarMonth -= 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
        lunarYear--;
    }
    return [lunarYear, lunarMonth, lunarDay, lunarLeap, dayNumber];
}
function ConvertDate2Lunar(date, timeZone = 7.0) {
    return ConvertSolar2Lunar(date.getFullYear(), date.getMonth() + 1, date.getDate(), timeZone);
}
function ConvertLunar2Solar(lunarYear, lunarMonth, lunarDay, lunarLeap = false, timeZone = 7.0) {
    let a11, b11;
    if (lunarMonth < 11) {
        a11 = GetLunarMonth11(lunarYear - 1, timeZone);
        b11 = GetLunarMonth11(lunarYear, timeZone);
    } else {
        a11 = GetLunarMonth11(lunarYear, timeZone);
        b11 = GetLunarMonth11(lunarYear + 1, timeZone);
    }
    let off = lunarMonth - 11;
    if (off < 0) {
        off += 12;
    }
    if (lunarLeap && b11 - a11 < 365) {
        throw new VietnameseDateException('Invalid leap month');
    }
    if (b11 - a11 > 365 || lunarLeap) {
        const leapOff = GetLeapMonthOffset(a11, timeZone);
        let leapMonth = leapOff - 2;
        if (leapMonth < 0) {
            leapMonth += 12;
        }
        if (lunarLeap && lunarMonth !== leapMonth) {
            throw new VietnameseDateException('Invalid leap month');
        }
        // nếu là tháng nhuận hoặc ở sau tháng nhuận thì cộng thêm 1 tháng
        if (lunarLeap || (lunarMonth === 12 && leapOff === 1) || (lunarMonth < 11 && leapOff - 2 < lunarMonth)) {
            off += 1;
        }
    }
    const k = Int(0.5 + (a11 - 2415021.076998695) / 29.530588853);
    const monthStart = GetNewMoonDay(k + off, timeZone);
    const jd = monthStart + lunarDay - 1;
    //return { solarDateTime: JdToDate(jd), juliusDayNumber: jd };
    return jd;
}
const CelestialStems = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const TerrestrialBranches = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
const MonthSpeechNames = ['Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười một', 'Chạp'];
const DayOfWeekNames = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
const PropitiousHours = [
    [1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MinorSolarTerms = [
    'Xuân Phân',
    'Thanh Minh',
    'Cốc Vũ',
    'Lập Hạ',
    'Tiểu Mãn',
    'Mang Chủng',
    'Hạ Chí',
    'Tiểu Thử',
    'Đại Thử',
    'Lập Thu',
    'Xử Thử',
    'Bạch Lộ',
    'Thu Phân',
    'Hàn Lộ',
    'Sương Giáng',
    'Lập Đông',
    'Tiểu Tuyết',
    'Đại Tuyết',
    'Đông Chí',
    'Tiểu Hàn',
    'Đại Hàn',
    'Lập Xuân',
    'Vũ Thủy',
    'Kinh Trập',
];
/**
 * Vietnamese lunar date - Ngày âm lịch
 */
export default class VietnameseDate {
    constructor(firstParameter, lunarMonth = 1, lunarDay = 1, isLeapMonth = false) {
        if (firstParameter instanceof Date) {
            this.solarDate = firstParameter;
            const [lunarYear, lunarMonth, lunarDay, isLeapMonth, juliusDayNumber] = ConvertDate2Lunar(this.solarDate);
            this.year = lunarYear;
            this.month = lunarMonth;
            this.day = lunarDay;
            this.isLeapMonth = !!isLeapMonth;
            this.juliusDayNumber = juliusDayNumber;
            return;
        }
        this.year = firstParameter;
        this.month = lunarMonth;
        this.day = lunarDay;
        this.isLeapMonth = isLeapMonth;
        //const result = ConvertLunar2Solar(this.year, lunarMonth, lunarDay, isLeapMonth);
        //this.solarDate = result.solarDateTime;
        //this.juliusDayNumber = result.juliusDayNumber;
        this.juliusDayNumber = ConvertLunar2Solar(this.year, lunarMonth, lunarDay, isLeapMonth);
        this.solarDate = JdToDate(this.juliusDayNumber);
    }
    /**
     * Celestial stem of day - Can của ngày
     */
    get celestialStemOfDay() {
        return CelestialStems[(this.juliusDayNumber + 9) % 10];
    }
    /**
     * Terrestrial branch of day - Chi của ngày
     */
    get terrestrialBranchOfDay() {
        return TerrestrialBranches[(this.juliusDayNumber + 1) % 12];
    }
    /**
     * Celestial stem of month - Can của tháng
     */
    get celestialStemOfMonth() {
        return CelestialStems[(this.year * 12 + this.month + 3) % 10];
    }
    /**
     * Terrestrial branch of month - Chi của tháng
     */
    get terrestrialBranchOfMonth() {
        return TerrestrialBranches[(this.month + 1) % 12];
    }
    /**
     * Celestial stem of year - Can của năm
     */
    get celestialStemOfYear() {
        return CelestialStems[(this.year + 6) % 10];
    }
    /**
     * Terrestrial branch of year - Chi của năm
     */
    get terrestrialBranchOfYear() {
        return TerrestrialBranches[(this.year + 8) % 12];
    }
    /**
     * Propitious hours - Các giờ hoàng đạo
     */
    get propitiousHours() {
        const terrestrialBranchOfDay = (this.juliusDayNumber + 1) % 12;
        const propitiousHours = PropitiousHours[terrestrialBranchOfDay % 6];
        return propitiousHours
            .map((c, i) => (c === 0 ? null : `${TerrestrialBranches[i]} (${(i * 2 + 23) % 24}-${(i * 2 + 1) % 24})`))
            .filter((s) => s !== null)
            .join(', ');
    }
    /**
     * Convert to string - Chuyển đổi thành chuỗi
     * @param formatString Format string - Chuỗi định dạng. Hỗ trợ các giá trị:
     *
     * d: Dạng ngắn gọn. Ví dụ: "07/10/2021" hoặc "26/04N/2020"
     *
     * D: Dạng dài. Ví dụ: "Thứ năm, mùng 7 tháng Mười năm 2021" hoặc "Thứ tư, ngày 26 tháng Tư (nhuận) năm 2020"
     *
     * m: Dạng tháng (số). Ví dụ: "07/10" hoặc "26/04N"
     *
     * M: Dạng tháng (chữ). Ví dụ: "mùng 7 tháng Mười" hoặc "26 tháng Tư (nhuận)"
     *
     * s: Dạng sắp xếp. Ví dụ: "2021 / 10 / 07" hoặc "2020/04N/26"
     *
     * L: Dạng can chi. Ví dụ: "ngày Quý Hợi tháng Kỷ Hợi năm Tân Sửu" hoặc "ngày Tân Mão tháng Tân Tỵ (nhuận) năm Canh Tý"
     *
     * F: Dạng đầy đủ. Ví dụ: "Thứ năm, mùng 7 tháng Mười năm 2021 (ngày Quý Hợi tháng Kỷ Hợi năm Tân Sửu)" hoặc "Thứ tư, ngày 26 tháng Tư (nhuận) năm 2020 (ngày Tân Mão tháng Tân Tỵ (nhuận) năm Canh Tý)"
     */
    format(formatString = 'd') {
        switch (formatString) {
            case 'D':
                return `${DayOfWeekNames[this.solarDate.getDay()]}, ${this.day <= 10 ? 'mùng' : 'ngày'} ${this.day} tháng ${
                    MonthSpeechNames[this.month - 1]
                }${this.isLeapMonth ? ' (nhuận)' : ''} năm ${this.year.toString().padStart(4, '0')}`;
            case 'm':
                return `${this.day.toString().padStart(2, '0')}/${this.month.toString().padStart(2, '0')}${
                    this.isLeapMonth ? 'N' : ''
                }`;
            case 'M':
                return `${this.day <= 10 ? 'mùng' : 'ngày'} ${this.day} tháng ${MonthSpeechNames[this.month - 1]}${
                    this.isLeapMonth ? ' (nhuận)' : ''
                }`;
            case 's':
                return `${this.year.toString().padStart(4, '0')} / ${this.month.toString().padStart(2, '0')}${
                    this.isLeapMonth ? 'N' : ' '
                }/ ${this.day.toString().padStart(2, '0')}`;
            case 'L':
                return `ngày ${this.celestialStemOfDay} ${this.terrestrialBranchOfDay} tháng ${this.celestialStemOfMonth} ${
                    this.terrestrialBranchOfMonth
                }${this.isLeapMonth ? ' (nhuận)' : ''} năm ${this.celestialStemOfYear} ${this.terrestrialBranchOfYear}`;
            case 'F':
                return `${DayOfWeekNames[this.solarDate.getDay()]}, ${this.day <= 10 ? 'mùng' : 'ngày'} ${this.day} tháng ${
                    MonthSpeechNames[this.month - 1]
                }${this.isLeapMonth ? ' (nhuận)' : ''} năm ${this.year.toString().padStart(4, '0')} (ngày ${
                    this.celestialStemOfDay
                } ${this.terrestrialBranchOfDay} tháng ${this.celestialStemOfMonth} ${this.terrestrialBranchOfMonth}${
                    this.isLeapMonth ? ' (nhuận)' : ''
                } năm ${this.celestialStemOfYear} ${this.terrestrialBranchOfYear})`;
            default:
                return `${this.day.toString().padStart(2, '0')}/${this.month.toString().padStart(2, '0')}${
                    this.isLeapMonth ? 'N' : ''
                }/${this.year.toString().padStart(4, '0')}`;
        }
    }
    /**
     * Return leap month of year, return 0 if year does not have leap month - Trả về tháng nhuận của năm, nếu không phải năm nhuận thì trả về 0.
     * @param lunarYear Lunar year - Năm âm lịch
     */
    static getLeapMonth(lunarYear) {
        const timeZone = 7.0;
        let a11 = GetLunarMonth11(lunarYear - 1, timeZone);
        let b11 = GetLunarMonth11(lunarYear, timeZone);
        let leapOff;
        if (b11 - a11 > 365) {
            leapOff = GetLeapMonthOffset(a11, timeZone);
            return Math.max(leapOff - 2, 0);
        }
        a11 = GetLunarMonth11(lunarYear, timeZone);
        b11 = GetLunarMonth11(lunarYear + 1, timeZone);
        if (b11 - a11 <= 365) return 0;
        leapOff = GetLeapMonthOffset(a11, timeZone);
        return leapOff === 1 || leapOff === 2 ? leapOff + 10 : 0;
    }
}
