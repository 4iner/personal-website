// troika-three-text defines empty setters for customDepthMaterial/customDistanceMaterial
// to shadow the parent Object3D property. Terser strips empty setter bodies in production,
// leaving getter-only accessors that crash when Three.js tries to initialize them.
// Excluding troika packages from minification preserves the empty setters.
exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
    if (stage === 'build-javascript') {
        const config = getConfig();
        // Mutate the existing TerserPlugin's `exclude` in place. Reconstructing
        // the plugin doesn't work: terser-webpack-plugin stores a normalized
        // options object on the instance (with an internal `minimizer` key) that
        // is not valid input to its own constructor.
        config.optimization?.minimizer?.forEach(plugin => {
            if (plugin.constructor.name === 'TerserPlugin') {
                plugin.options.exclude = /troika/;
            }
        });
        actions.replaceWebpackConfig(config);
    }
};
