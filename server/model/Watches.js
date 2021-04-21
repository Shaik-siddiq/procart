let mongoose = require("mongoose");
let WatchesSchema = new mongoose.Schema({watchname:{type: String, require:true}
                                          ,price:{type: Number, require:true}
                                        })
let Watches = mongoose.model('watches', WatchesSchema);

module.exports = Watches;