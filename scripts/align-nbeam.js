importScripts('../vendor/ntseq.js');
onmessage = function(e){
  var subset = e.data.nodes;
  var reference = new Nt.Seq();
  reference.read(e.data.reference);

  subset.forEach(node => {
    var match = (new Nt.Seq()).read(node.seq);
    var map = new Nt.MatchMap(match, reference);
    map.initialize();
    map.sort();
    node.padding = map.best().position;
  });

  postMessage(subset);
  close();
};