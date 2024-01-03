/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '@mui/material/styles';

/** constants */
import { getOption } from '@module-base/utils/helpers/particleOptions';

/** types */
import type { Container } from '@tsparticles/engine';
import type { IParticlesProps } from '@tsparticles/react';

const Particle = React.memo((props: IParticlesProps) => {
    const { options: Options } = props;
    const theme = useTheme();
    const id = React.useId();

    const [init, setInit] = React.useState(false);

    React.useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container) => {
        console.log(container);
    };

    const options = Options || getOption(theme);

    return init && <Particles id={`Particles-${id}`} particlesLoaded={particlesLoaded} options={options} />;
});

Particle.displayName = 'Particle';
export default Particle;
