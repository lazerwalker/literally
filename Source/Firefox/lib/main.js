var data = require("sdk/self").data;

var pageMod = require("sdk/page-mod").PageMod({
    include: ['*'],
    contentScriptWhen: 'ready',
    contentScriptFile: data.url('content_script.js')
});
