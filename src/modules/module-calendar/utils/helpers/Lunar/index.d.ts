export declare class VietnameseDateException extends Error {
    constructor(message?: string);
}
/**
 * Vietnamese lunar date - Ngày âm lịch
 */
export default class VietnameseDate {
    constructor(solarDate: Date);
    constructor(lunarYear: number);
    constructor(lunarYear: number, lunarMonth: number);
    constructor(lunarYear: number, lunarMonth: number, lunarDay: number);
    constructor(lunarYear: number, lunarMonth: number, lunarDay: number, isLeapMonth: boolean);
    /**
     * Lunar Year - Năm âm lịch
     */
    readonly year: number;
    /**
     * Lunar Month - Tháng âm lich
     */
    readonly month: number;
    /**
     * Lunar Day of Month - Ngày âm lịch trong tháng
     */
    readonly day: number;
    /**
     * Is leap month - Cho biết có phải tháng nhuận không
     */
    readonly isLeapMonth: boolean;
    /**
     * Solar Date - Ngày dương lịch
     */
    readonly solarDate: Date;
    /**
     * The day number from 01/01/4713 BC (in Julian calendar) - Số ngày tính từ ngày 1 tháng 1 năm 4713 trước công nguyên (theo lịch Julian)
     */
    readonly juliusDayNumber: number;
    /**
     * Celestial stem of day - Can của ngày
     */
    get celestialStemOfDay(): string;
    /**
     * Terrestrial branch of day - Chi của ngày
     */
    get terrestrialBranchOfDay(): string;
    /**
     * Celestial stem of month - Can của tháng
     */
    get celestialStemOfMonth(): string;
    /**
     * Terrestrial branch of month - Chi của tháng
     */
    get terrestrialBranchOfMonth(): string;
    /**
     * Celestial stem of year - Can của năm
     */
    get celestialStemOfYear(): string;
    /**
     * Terrestrial branch of year - Chi của năm
     */
    get terrestrialBranchOfYear(): string;
    /**
     * Propitious hours - Các giờ hoàng đạo
     */
    get propitiousHours(): string;
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
    format(formatString?: string): string;
    /**
     * Return leap month of year, return 0 if year does not have leap month - Trả về tháng nhuận của năm, nếu không phải năm nhuận thì trả về 0.
     * @param lunarYear Lunar year - Năm âm lịch
     */
    static getLeapMonth(lunarYear: number): number;
}
