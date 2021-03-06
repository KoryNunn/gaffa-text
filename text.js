var Gaffa = require('gaffa'),
    crel = require('crel');

function Text(){}
Text = Gaffa.createSpec(Text, Gaffa.View);
Text.prototype._type = 'text';

Text.prototype.render = function(){
    this.renderedElement = document.createTextNode('');
};

Text.prototype.text = new Gaffa.Property(function(viewModel, value){
    viewModel.renderedElement.data = value || '';
});

Text.prototype.visible = new Gaffa.Property(function(viewModel, value){
    viewModel.renderedElement.data = (value === false ? '' : viewModel.text.value || '');
});

Text.prototype.title = undefined;
Text.prototype.enabled = undefined;
Text.prototype.classes = undefined;

module.exports = Text;