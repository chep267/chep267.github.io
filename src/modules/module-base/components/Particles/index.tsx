/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useTheme as useThemeMUI } from '@mui/material/styles';

/** constants */
import { getOption } from '@module-base/utils/helpers/particleOptions';

/** types */
import type { Engine } from 'tsparticles-engine';
import type { IParticlesProps } from 'react-tsparticles/types/IParticlesProps';

const Particle = React.memo((props: IParticlesProps) => {
    const { options: Options } = props;
    const theme = useThemeMUI();
    const id = React.useId();

    const particlesInit = React.useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const options = Options || getOption(theme);

    return <Particles id={`Particles-${id}`} init={particlesInit} options={options} />;
});

Particle.displayName = 'Particle';
export default Particle;
