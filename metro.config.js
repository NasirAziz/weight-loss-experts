const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    config.transformer = {
        ...transformer,
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
    };
    config.resolver = {
        ...resolver,
        // assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
        assetExts: [...resolver.assetExts, "cjs", "svg"],
        sourceExts: [...resolver.sourceExts, "js", "jsx", "svg", "ts", "tsx", "cjs"],
    };
    // config.resolver.assetExts.push("cjs");

    return config;
})();
