
module.exports = function(_, _fantasy, functionalHelpers){
    var fh = functionalHelpers;
    var parseMetadata = _.compose(_.chain(fh.parseBuffer), _.chain(fh.safeProp('Metadata')), fh.safeProp('OriginalEvent'));
    var parseData = _.compose(_.chain(fh.parseBuffer), _.chain(fh.safeProp('Data')), fh.safeProp('OriginalEvent'));

    return {
        parseMetadata,
        parseData
    }
};