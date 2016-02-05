
module.exports = function(R, functionalHelpers){
    var fh = functionalHelpers;
    var parseMetadata = R.compose(R.chain(fh.parseBuffer), R.chain(fh.safeProp('Metadata')), fh.safeProp('OriginalEvent'));
    var parseData = R.compose(R.chain(fh.parseBuffer), R.chain(fh.safeProp('Data')), fh.safeProp('OriginalEvent'));

    return {
        parseMetadata,
        parseData
    }
};