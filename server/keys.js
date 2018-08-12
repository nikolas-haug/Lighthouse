// api keys to call with dotenv package

exports.BetterDoctors = {
    access_token_key: process.env.LIGHHOUSE_APP_PROVIDERS_KEY
};

exports.GoogleCustomSearch = {
    access_token_key: process.env.LIGHTHOUSE_APP_GOOGLECUSTOM_KEY,
    search_engine_key: process.env.LIGHTHOUSE_APP_CUSTOMENGINE_KEY
};