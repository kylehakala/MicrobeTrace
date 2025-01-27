self.app = {};

app.componentCache = {};

app.dataSkeleton = function(){
  return {
    nodes: [],
    links: [],
    clusters: [],
    distance_matrix: {},
    nodeFields: ['index', 'id', 'selected', 'cluster', 'visible', 'degree', 'origin'],
    linkFields: ['index', 'source', 'target', 'visible', 'cluster', 'origin', 'directed', 'nn'],
    clusterFields: ['id', 'nodes', 'links', 'sum_distances', 'links_per_node', 'mean_genetic_distance', 'visible'],
    reference: 'CCTCAGGTCACTCTTTGGCAACGACCCCTCGTCACAATAAAGATAGGGGGGCAACTAAAGGAAGCTCTATTAGATACAGGAGCAGATGATACAGTATTAGAAGAAATGAGTTTGCCAGGAAGATGGAAACCAAAAATGATAGGGGGAATTGGAGGTTTTATCAAAGTAAGACAGTATGATCAGATACTCATAGAAATCTGTGGACATAAAGCTATAGGTACAGTATTAGTAGGACCTACACCTGTCAACATAATTGGAAGAAATCTGTTGACTCAGATTGGTTGCACTTTAAATTTTCCCATTAGCCCTATTGAGACTGTACCAGTAAAATTAAAGCCAGGAATGGATGGCCCAAAAGTTAAACAATGGCCATTGACAGAAGAAAAAATAAAAGCATTAGTAGAAATTTGTACAGAGATGGAAAAGGAAGGGAAAATTTCAAAAATTGGGCCTGAAAATCCATACAATACTCCAGTATTTGCCATAAAGAAAAAAGACAGTACTAAATGGAGAAAATTAGTAGATTTCAGAGAACTTAATAAGAGAACTCAAGACTTCTGGGAAGTTCAATTAGGAATACCACATCCCGCAGGGTTAAAAAAGAAAAAATCAGTAACAGTACTGGATGTGGGTGATGCATATTTTTCAGTTCCCTTAGATGAAGACTTCAGGAAGTATACTGCATTTACCATACCTAGTATAAACAATGAGACACCAGGGATTAGATATCAGTACAATGTGCTTCCACAGGGATGGAAAGGATCACCAGCAATATTCCAAAGTAGCATGACAAAAATCTTAGAGCCTTTTAGAAAACAAAATCCAGACATAGTTATCTATCAATACATGGATGATTTGTATGTAGGATCTGACTTAGAAATAGGGCAGCATAGAACAAAAATAGAGGAGCTGAGACAACATCTGTTGAGGTGGGGACTTACCACACCAGACAAAAAACATCAGAAAGAACCTCCATTCCTTTGGATGGGTTATGAACTCCATCCTGATAAATGGACAGTACAGCCTATAGTGCTGCCAGAAAAAGACAGCTGGACTGTCAATGACATACAGAAGTTAGTGGGGAAATTGAATTGGGCAAGTCAGATTTACCCAGGGATTAAAGTAAGGCAATTATGTAAACTCCTTAGAGGAACCAAAGCACTAACAGAAGTAATACCACTAACAGAAGAAGCAGAGCTAGAACTGGCAGAAAACAGAGAGATTCTAAAAGAACCAGTACATGGAGTGTATTATGACCCATCAAAAGACTTAATAGCAGAAATACAGAAGCAGGGGCAAGGCCAATGGACATATCAAATTTATCAAGAGCCATTTAAAAATCTGAAAACAGGAAAATATGCAAGAATGAGGGGTGCCCACACTAATGATGTAAAACAATTAACAGAGGCAGTGCAAAAAATAACCACAGAAAGCATAGTAATATGGGGAAAGACTCCTAAATTTAAACTGCCCATACAAAAGGAAACATGGGAAACATGGTGGACAGAGTATTGGCAAGCCACCTGGATTCCTGAGTGGGAGTTTGTTAATACCCCTCCCTTAGTGAAATTATGGTACCAGTTAGAGAAAGAACCCATAGTAGGAGCAGAAACCTTC'
  };
};

app.defaultWidgets = {
  '3DNet-link-tooltip-variable': 'None',
  '3DNet-link-transparency': 0,
  '3DNet-link-width': 1.6,
  '3DNet-node-tooltip-variable': 'id',
  '3DNet-node-radius': 4,
  '3DNet-node-radius-variable': 'None',
  'ambiguity-resolution-strategy': 'AVERAGE',
  'background-color': '#ffffff',
  'background-color-contrast': '#000000',
  'bubble-x': 'None',
  'bubble-y': 'None',
  'bubble-size': 5,
  'flow-showNodes': 'selected',
  'globe-countries-show': false,
  'globe-field-lat': 'None',
  'globe-field-lon': 'None',
  'globe-field-tract': 'None',
  'globe-field-zipcode': 'None',
  'globe-field-county': 'None',
  'globe-field-state': 'None',
  'globe-field-country': 'None',
  'globe-link-show': true,
  'globe-link-transparency': 0,
  'globe-node-jitter': 0,
  'globe-node-show': true,
  'globe-node-transparency': 0,
  'globe-stars-show': true,
  'heatmap-metric': 'tn93',
  'heatmap-invertX': false,
  'heatmap-invertY': false,
  'heatmap-color-high': '#a50026',
  'heatmap-color-medium': '#ffffbf',
  'heatmap-color-low': '#313695',
  'heatmap-axislabels-show': false,
  'histogram-axis-x': true,
  'histogram-scale-log': false,
  'histogram-variable': 'links-tn93',
  'link-color': '#a6cee3',
  'link-color-variable': 'None',
  'link-directed': false,
  'link-label-variable': 'None',
  'link-length': 0.125,
  'link-opacity': 0,
  'link-sort-variable': 'tn93',
  'link-threshold': 0.015,
  'link-tooltip-variable': 'None',
  'link-width': 3,
  'link-width-variable': 'None',
  'link-width-reciprocal': true,
  'map-basemap-show': false,
  'map-collapsing-on': true,
  'map-counties-show': false,
  'map-countries-show': true,
  'map-field-lat': 'None',
  'map-field-lon': 'None',
  'map-field-tract': 'None',
  'map-field-zipcode': 'None',
  'map-field-county': 'None',
  'map-field-state': 'None',
  'map-field-country': 'None',
  'map-link-show': true,
  'map-link-tooltip-variable': 'None',
  'map-link-transparency': 0,
  'map-node-jitter': 0,
  'map-node-show': true,
  'map-node-tooltip-variable': 'id',
  'map-node-transparency': 0,
  'map-satellite-show': false,
  'map-states-show': true,
  'network-friction': 0.4,
  'network-gravity': 0.05,
  'node-charge': 200,
  'node-color': '#1f77b4',
  'node-color-variable': 'None',
  'node-highlight': false,
  'node-label-size': 16,
  'node-label-variable': 'None',
  'node-radius': 250,
  'node-radius-variable': 'None',
  'node-symbol': 'symbolCircle',
  'node-symbol-variable': 'None',
  'node-tooltip-variable': 'id',
  'scatterplot-xVar': 'index',
  'scatterplot-yVar': 'tn93',
  'scatterplot-logScale': false,
  'scatterplot-showNodes': false,
  'selected-color': '#ff8300',
  'selected-color-contrast': '#000000',
  'timeline-noncumulative': true,
  'tree-branch-distance-show': true,
  'tree-horizontal-stretch': 1,
  'tree-leaf-label-show': true,
  'tree-layout-vertical': false,
  'tree-layout-horizontal': true,
  'tree-layout-circular': false,
  'tree-labels-align': false,
  'tree-labels-show': true,
  'tree-metric': 'tn93',
  'tree-mode-square': true,
  'tree-mode-smooth': false,
  'tree-mode-straight': false,
  'tree-ruler-show': true,
  'tree-type': 'weighted',
  'tree-vertical-stretch': 1
};

app.sessionSkeleton = function(){
  return {
    data: app.dataSkeleton(),
    files: [],
    layout: {
      content: [{
        type: 'files'
      }],
      type: 'stack'
    },
    messages: [],
    meta: {
      loadTime: 0,
      startTime: 0
    },
    network: {
      allPinned: false,
      nodes: []
    },
    state: {
      metrics: ['tn93'],
      timeStart: 0,
      timeEnd: Date.now()
    },
    style: {
      linkColors: d3.schemePaired,
      nodeColors: [d3.schemeCategory10[0]].concat(d3.schemeCategory10.slice(2)),
      nodeSymbols: ['symbolCircle', 'symbolCross', 'symbolDiamond', 'symbolSquare', 'symbolStar', 'symbolTriangle', 'symbolWye', 'symbolTriangleDown', 'symbolTriangleLeft', 'symbolTriangleRight', 'symbolDiamondAlt', 'symbolDiamondSquare', 'symbolPentagon', 'symbolHexagon', 'symbolHexagonAlt', 'symbolOctagon', 'symbolOctagonAlt', 'symbolX'],
      widgets: app.defaultWidgets
    },
    warnings: []
  };
};

app.tempSkeleton = function(){
  return {
    style: {
      linkColorMap: function(){ return session.style.widgets['link-color']; },
      nodeColorMap: function(){ return session.style.widgets['node-color']; },
      nodeSymbolMap: function(){ return session.style.widgets['node-symbol']; }
    },
    trees: {},
    messageTimeout: null
  };
};

app.mapData = {};

app.defaultNode = function(){
  return {
    index: session.data.nodes.length,
    id: '',
    selected: false,
    cluster: 1,
    visible: true,
    degree: 0,
    origin: []
  }
};

app.addNode = function(newNode){
  if(typeof newNode.id === 'number') newNode.id = '' + newNode.id;
  var oldNode = session.data.nodes.find(function(d){ return d.id === newNode.id; });
  if(oldNode){
    if(newNode.origin) newNode.origin = newNode.origin.concat(oldNode.origin);
    Object.assign(oldNode, newNode);
    return 0;
  } else {
    if('seq' in newNode) newNode._seqInt = newNode.seq.split('').map(function(c){ return tn93.mapChar[c.charCodeAt(0)]; });
    session.data.nodes.push(Object.assign(app.defaultNode(), newNode));
    return 1;
  }
};

app.defaultLink = function(){
  return {
    index: session.data.links.length,
    source: '',
    target: '',
    visible: false,
    cluster: 1,
    origin: []
  }
};

app.addLink = function(newLink, check){
  if(newLink.source === newLink.target) return;
  var links = session.data.links;
  if(check){
    var n = links.length;
    for(var i = 0; i < n; i++){
      var l = links[i];
      if((l.source == newLink.source && l.target == newLink.target) ||
         (l.source == newLink.target && l.target == newLink.source)){
        if(newLink.origin && !l.origin.includes(newLink.origin)){
          newLink.origin = newLink.origin.concat(l.origin);
        }
        Object.assign(l, newLink);
        return 0;
      }
    }
  }
  session.state.metrics.forEach(function(m){
    newLink[m] = parseFloat(newLink[m]);
  });
  links.push(Object.assign(app.defaultLink(), newLink));
  return 1;
};

app.processSVG = function(svg){
  var nodes = [];
  var $xml = $(svg);
  $xml.find('.nodes g').each(function(i, node){
    nodes.push($(node).attr('transform').slice(10, -1).split(',').map(parseFloat));
    app.addNode({
      id: i+'',
      origin: ['Scraped SVG']
    });
  });
  $xml.find('line').each(function(i, link){
    var $l = $(link);
    var source = nodes.findIndex(function(d){
      return (
        Math.abs(d[0] - parseFloat($l.attr('x1'))) < 0.0001 &&
        Math.abs(d[1] - parseFloat($l.attr('y1'))) < 0.0001
      );
    });
    var target = nodes.findIndex(function(d){
      return (
        Math.abs(d[0] - parseFloat($l.attr('x2'))) < 0.0001 &&
        Math.abs(d[1] - parseFloat($l.attr('y2'))) < 0.0001
      );
    });
    if(source < 0 || target < 0) return;
    var base = {
      source: source+'',
      target: target+'',
      origin: ['Scraped SVG']
    };
    session.state.metrics.forEach(function(metric){
      base[metric] = 0;
    });
    app.addLink(base, true);
  });
  app.finishUp();
};

app.processJSON = function(json, extension){
  var data;
  try {
    data = JSON.parse(json);
  } catch(error) {
    alertify.error('File Not Recognized! Are you certain this is a MicrobeTrace Session or HIV-TRACE Output File?');
    console.error(error);
    return;
  }
  if(extension === 'microbetrace'){
    app.applySession(data);
  } else {
    if(data.version){
      app.applyGHOST(data);
    } else {
      app.applyHIVTrace(data);
    }
  }
};

app.applyHIVTrace = function(hivtrace){
  self.session = app.sessionSkeleton();
  session.meta.startTime = Date.now();
  hivtrace['trace_results']['Nodes'].forEach(function(node){
    var newNode = JSON.parse(JSON.stringify(node.patient_attributes));
    newNode.id = node.id;
    newNode.origin = 'HIVTRACE Import';
    app.addNode(newNode);
  });
  Object.keys(hivtrace['trace_results']['Nodes'][0]['patient_attributes']).forEach(function(key){
    if(!session.data.nodeFields.includes(key)) session.data.nodeFields.push(key);
  });
  var n = hivtrace['trace_results']['Edges'].length;
  var metric = session.state.metrics[0];
  for(var i = 0; i < n; i++){
    var link = hivtrace['trace_results']['Edges'][i];
    var newLink = {
      'source': '' + link.sequences[0],
      'target': '' + link.sequences[1],
      'origin': ['HIVTRACE Import'],
      'visible': true
    };
    newLink[metric] = parseFloat(link.length);
    app.addLink(newLink, false);
  }
  session.data.linkFields.push(metric);
  app.finishUp();
};

app.applyGHOST = function(ghost){
  self.session = app.sessionSkeleton();
  session.meta.startTime = Date.now();
  ghost['samples'].forEach(function(node){
    var newNode = JSON.parse(JSON.stringify(node));
    newNode.origin = 'GHOST Import';
    newNode.genotypes = JSON.stringify(newNode.genotypes);
    newNode.id = '' + newNode.id;
    app.addNode(newNode);
  });
  ['genotypes', 'group', 'id', 'name'].forEach(function(key){
    if(!session.data.nodeFields.includes(key)) session.data.nodeFields.push(key);
  });
  var links = ghost['links'];
  var n = links.length;
  var metric = session.state.metrics[0];
  for(var i = 0; i < n; i++){
    var link = links[i];
    var newLink = Object.assign({}, link, {
      'source': '' + link.source,
      'target': '' + link.target,
      'dist': parseFloat(link.dist),
      'origin': ['GHOST Import'],
      'visible': true
    });
    newLink[metric] = newLink.dist;
    if(isNaN(newLink[metric])){
      newLink[metric] = metric == 'tn93' ? 1 : 100;
    }
    app.addLink(newLink, false);
  }
  [metric, 'density', 'dist', 'shared', 'src_genotype', 'src_haps', 'tgt_genotype', 'tgt_haps'].forEach(function(key){
    if(!session.data.linkFields.includes(key)) session.data.linkFields.push(key);
  });
  app.finishUp();
};

app.parseFASTA = function(text, callback){
  var computer = new Worker('scripts/parse-fasta.js');
  computer.onmessage = function(response){
    var nodes = JSON.parse(app.decoder.decode(new Uint8Array(response.data.nodes)));
    console.log('FASTA Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    if(callback) callback(nodes);
  };
  computer.postMessage(text);
};

app.r01 = Math.random;

// ported from https://github.com/CDCgov/SeqSpawnR/blob/91d5857dbda5998839a002fbecae0f494dca960a/R/SequenceSpawner.R
// example: app.addFile(new File([app.unparseFASTA(app.generateSeqs("gen-", 50, 20))], "generated.fasta"))
app.generateSeqs = function(idPrefix, count, snps, seed){
  if(!count) count = 1000;
  if(!snps) snps = 100;
  if(!seed) seed = session.data.reference

  var sampleCodons = [
    'GCA','GCC','GCG','GCT','AAC','AAT','GAC','GAT','TGC','TGT','GAC','GAT',
    'GAA','GAG','TTC','TTT','GGA','GGC','GGG','GGT','CAC','CAT','ATA','ATC',
    'ATT','AAA','AAG','CTA','CTC','CTG','CTT','TTA','TTG','ATG','AAC','AAT',
    'CCA','CCC','CCG','CCT','CAA','CAG','AGA','AGG','CGA','CGC','CGG','CGT',
    'AGC','AGT','TCA','TCC','TCG','TCT','ACA','ACC','ACG','ACT','GTA','GTC',
    'GTG','GTT','TGG','TAC','TAT','CAA','CAG','GAA','GAG'];
  var sampleSNPs = ["A", "C", "G", "T"];

  function sample(vec, count){
    var samples = [];
    for(var x = 0; x < count; x ++){
      var idx = Math.floor(app.r01() * vec.length);
      samples.push(vec[idx]);
    }
    return samples;
  }

  var seqs = [];

  seqs.push({id: idPrefix + '0', seq: seed});

  while(seqs.length < count){
    // number codons to vary
    var nCodons = Math.floor(app.r01() * 10) + 1;

    // randomly select this many to check for existence
    var randomCodonSet = sample(sampleCodons, nCodons).join('');

    // try again if not present
    if(seqs[seqs.length - 1].seq.indexOf(randomCodonSet) == -1)
      continue;

    // sequence to mutate
    var oldseed = seqs[Math.floor(app.r01() * seqs.length)].seq;

    // select codons to replace randomCodonSet
    var replacementCodonSet = sample(sampleCodons, nCodons).join('');

    // replace codon set
    var newseed = oldseed.replace(randomCodonSet, replacementCodonSet);

    // add snp substitutions randomly across entire sequence
    // - randomly sample addedSNP
    // - randomly pick SNPS to replace
    var addedSNPs = Math.floor(app.r01() * snps);
    for(var j = 0; j < addedSNPs; j ++){
      var randomSNP = sample(sampleSNPs, 1)[0];
      var locOfSNP = Math.floor(app.r01() * seed.length);
      newseed = newseed.substr(0, locOfSNP) + randomSNP + newseed.substr(locOfSNP + 1);
    }

    seqs.push({id: idPrefix + '' + seqs.length, seq: newseed});
  }

  return seqs;
};

app.decoder = new TextDecoder('utf-8');

app.align = function(params, callback){
  if(params.aligner === 'none'){
    if(callback) callback(params.nodes);
    return;
  }
  var n = params.nodes.length;
  var aligner = new Worker('scripts/align-'+params.aligner+'.js');
  aligner.onmessage = function(response){
    var output = JSON.parse(app.decoder.decode(new Uint8Array(response.data.nodes)));
    console.log('Alignment transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    var start = Date.now();
    var minPadding = Number.MAX_SAFE_INTEGER,
        maxLength = 0,
        d = null;
    for(var i = 0; i < n; i++){
      d = output[i];
      if(!d.seq) d.seq = '';
      if(minPadding > d.padding) minPadding = d.padding;
    }
    for(var j = 0; j < n; j++){
      d = output[j];
      d.seq = '-'.repeat(d.padding - minPadding) + d.seq;
      delete d.padding;
      if(maxLength < d.seq.length) maxLength = d.seq.length;
    }
    for(var k = 0; k < n; k++){
      d = output[k];
      d.seq = d.seq + '-'.repeat(maxLength - d.seq.length);
    }
    console.log('Alignment Padding time: ', (Date.now()-start).toLocaleString(), 'ms');
    callback(output);
  };
  aligner.postMessage(params);
};

app.computeConsensus = function(callback){
  if(!callback) return;
  var nodes = session.data.nodes.filter(function(d){ return d.seq; });
  var computer = new Worker('scripts/compute-consensus.js');
  computer.onmessage = function(response){
    console.log('Consensus Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    callback(app.decoder.decode(new Uint8Array(response.data.consensus)));
  };
  computer.postMessage(nodes);
};

app.computeConsensusDistances = function(callback){
  var start = Date.now();
  var computer = new Worker('scripts/compute-consensus-distances.js');
  computer.onmessage = function(response){
    var nodes = JSON.parse(app.decoder.decode(new Uint8Array(response.data.nodes)));
    console.log('Consensus Difference Transit time: ', (Date.now()-start).toLocaleString(), 'ms');
    if(callback) callback(nodes);
  };
  var subset = [];
  var n = session.data.nodes.length;
  for(var i = 0; i < n; i++){
    var node = session.data.nodes[i];
    if(node.seq) subset.push({
      index: i,
      seq: node.seq
    });
  }
  computer.postMessage({
    consensus: session.data.consensus,
    nodes: subset
  });
};

app.computeLinks = function(subset, callback){
  var k = 0, computer = new Worker('scripts/compute-links.js');
  computer.onmessage = function(response){
    var links = JSON.parse(app.decoder.decode(new Uint8Array(response.data.links)));
    computer.terminate();
    console.log('Links Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    var start = Date.now();
    var check = session.files.length > 1;
    var n = links.length;
    for(var i = 0; i < n; i++){
      k += app.addLink(links[i], check);
    }
    console.log('Links Merge time: ', (Date.now()-start).toLocaleString(), 'ms');
    callback(k);
  };
  computer.postMessage({
    nodes: subset,
    metrics: session.state.metrics,
    strategy: session.style.widgets['ambiguity-resolution-strategy']
  });
};

app.computeDM = function(callback){
  var computer = new Worker('scripts/compute-dm.js');
  computer.onmessage = function(response){
    session.data.distance_matrix = JSON.parse(app.decoder.decode(new Uint8Array(response.data.matrices)));
    console.log('DM Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    if(callback) callback();
  };
  computer.postMessage({
    nodes: session.data.nodes,
    links: session.data.links.filter(function(l){
      return _.any(session.state.metrics.map(function(m){ return _.isNumber(l[m]); }));
    }),
    metrics: session.state.metrics
  });
};

app.computeTree = function(type, callback){
  var computer = new Worker('scripts/compute-tree.js');
  computer.onmessage = function(response){
    temp.trees[type] = patristic.parseJSON(app.decoder.decode(new Uint8Array(response.data.tree)));
    console.log('Tree (' +  type + ') Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    if(callback) callback();
  };
  computer.postMessage({
    matrix: session.data.distance_matrix[type],
    labels: session.data.distance_matrix.labels,
    round: session.style.widgets['tree-round']
  });
};

app.computeDirectionality = function(callback){
  var computer = new Worker('scripts/compute-directionality.js');
  computer.onmessage = function(response){
    var flips = JSON.parse(app.decoder.decode(new Uint8Array(response.data.output)));
    console.log('Directionality Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    var start = Date.now();
    var n = flips.length;
    for(var i = 0; i < n; i++){
      if(flips[i]){
        var fliplink = session.data.links[i];
        var fliptemp = fliplink.source;
        fliplink.source = fliplink.target;
        fliplink.target = fliptemp;
      }
    }
    console.log('Directionality Integration time: ', (Date.now()-start).toLocaleString(), 'ms');
    if(callback) callback();
  };
  computer.postMessage({
    links: session.data.links,
    tree: temp.trees[session.style.widgets['link-sort-variable']]
  });
  if(callback) callback();
};

app.computePatristicMatrix = function(type, callback){
  var computer = new Worker('scripts/compute-patristic-matrix.js');
  computer.onmessage = function(response){
    var output = JSON.parse(app.decoder.decode(new Uint8Array(response.data.output)));
    session.data.distance_matrix['patristic-'+type] = output.matrix;
    session.data.distance_matrix['patristic-'+type].labels = output.labels;
    console.log('Patristic Matrix (' +  type + ') Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    if(callback) callback();
  };
  computer.postMessage({
    newick: temp.trees[type]
  });
};

app.computeNN = function(metric, callback){
  if(!session.data.distance_matrix[metric]){
    console.error('Couldn\'t find Distance Matrix ' + metric + ' to compute Nearest Neighbors.');
    return;
  }
  var nnMachine = new Worker('scripts/compute-nn.js');
  nnMachine.onmessage = function(response){
    if(response.data === 'Error'){
      console.error('Nearest Neighbor washed out');
      return;
    }
    var links = JSON.parse(app.decoder.decode(new Uint8Array(response.data.links)));
    console.log('NN Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    var start = Date.now();
    links.forEach(function(l){ session.data.links[l.index].nn = l.nn });
    console.log('NN Merge time: ', (Date.now()-start).toLocaleString(), 'ms');
    if(callback) callback();
  };
  nnMachine.postMessage({
    links: session.data.links,
    nodes: session.data.nodes,
    matrix: session.data.distance_matrix[metric],
    epsilon: session.style.widgets['filtering-epsilon']
  });
};

app.computeTriangulation = function(metric, callback){
  if(!session.data.distance_matrix[metric]){
    console.error('Couldn\'t find Distance Matrix ' + metric + ' to compute Nearest Neighbors.');
    return;
  }
  var machine = new Worker('scripts/compute-triangulation.js');
  machine.onmessage = function(response){
    if(response.data === 'Error'){
      console.error('Triangulation washed out');
      return;
    }
    var matrix = JSON.parse(app.decoder.decode(new Uint8Array(response.data.matrix)));
    session.data.distance_matrix[metric] = matrix;
    console.log('Triangulation Transit time: ', (Date.now()-response.data.start).toLocaleString(), 'ms');
    if(callback) callback();
  };
  machine.postMessage({
    matrix: session.data.distance_matrix[metric]
  });
};

app.finishUp = function(oldSession){
  if(!oldSession){
    app.computeDM(function(){
      if($('[name="shouldTriangulate"]:checked').attr('id') == 'doTriangulate'){
        session.state.metrics.forEach(function(m){
          app.computeTriangulation(m, function(){
            if(m == session.style.widgets['link-sort-variable']){
              app.computeNN(session.style.widgets['link-sort-variable']);
            }
            app.computeTree(m, function(){
              if(m == session.style.widgets['link-sort-variable']){
                app.computeDirectionality();
              }
            });
          });
        });
      } else {
        app.computeNN(session.style.widgets['link-sort-variable']);
        session.state.metrics.forEach(function(m){ app.computeTree(m, function(){
          if(m == session.style.widgets['link-sort-variable']){
            app.computeDirectionality();
          }
        })});
      }
    });
  }
  clearTimeout(temp.messageTimeout);
  ['node', 'link'].forEach(function(v){
    var n = session.data[v+'s'].length;
    var fields = session.data[v+'Fields'];
    for(var i = 0; i < n; i++){
      var d = session.data[v+'s'][i];
      fields.forEach(function(field){
        if(!(field in d)) d[field] = null;
      });
    }
  });
  $('#link-sort-variable').html(
    session.data.linkFields.map(function(field){
      return '<option value="' + field + '">' + app.titleize(field) + '</option>';
    }).join('\n')
  ).val(session.style.widgets['link-sort-variable']);
  $('#node-color-variable').html(
    '<option selected>None</option>' +
    session.data.nodeFields.map(function(field){
      return '<option value="' + field + '">' + app.titleize(field) + '</option>';
    }).join('\n')
  );
  $('#link-color-variable').html(
    '<option>None</option>' +
    session.data.linkFields.map(function(field){
      return '<option value="' + field + '">' + app.titleize(field) + '</option>';
    }).join('\n')
  );
  try {
    app.updateThresholdHistogram();
  } catch(error){
    console.error(error);
    $('#loading-information-modal').modal('hide');
    alertify
      .error('Something went wrong! Please start a new session and try again.')
      .delay(0)
      .ondismiss(function(){
        window.location.reload();
      });
  }
  app.setLinkVisibility();
  app.setNodeVisibility();
  app.tagClusters();
  app.computeDegree();
  app.updateStatistics();
  $('#network-statistics-wrapper').fadeIn();
  $('#SettingsTab').attr('data-target', '#global-settings-modal');
  session.meta.loadTime = Date.now() - session.meta.startTime;
  console.log('Total load time:', session.meta.loadTime.toLocaleString(), 'ms');
  if(oldSession){
    layout.root.contentItems[0].remove();
    setTimeout(function(){app.loadLayout(session.layout)}, 80);
  } else {
    app.launchView($('#default-View').val());
  }
  if(localStorage.getItem('stash-auto') === 'true'){
    temp.autostash = {
      time: Date.now(),
      interval: setInterval(function(){
        var newTime = Date.now();
        localforage.setItem('stash-' + newTime + '-autostash', JSON.stringify(session)).then(function(){
          localforage.removeItem('stash-' + temp.autostash.time + '-autostash').then(function(){
            temp.autostash.time = newTime;
          });
        });
      }, 60000)
    };
  }
  $('.hideForHIVTrace').css('display', 'flex');
  setTimeout(function(){
    var files = layout.contentItems.find(function(item){ return item.componentName === 'files'; });
    if(files) files.remove();
    $('#loading-information-modal').modal('hide');
  }, 1200);
};

app.capitalize = function(c){
  return c.toUpperCase();
};

app.titleize = function(title){
  var small = title.toLowerCase().replace(/_/g, ' ');
  if(small === 'id') return 'ID';
  if(small === 'tn93') return 'TN93';
  if(small === 'snps') return 'SNPs';
  if(small === '2d network') return '2D Network';
  if(small === '3d network') return '3D Network';
  if(small === 'geo map') return 'Map';
  if(small === 'nn') return 'Nearest Neighbor';
  return small.replace(/(?:^|\s|-)\S/g, app.capitalize);
};

app.tagClusters = function(){
  var start = Date.now();
  session.data.clusters = [];
  var nodes = session.data.nodes;
  var n = nodes.length;
  temp.nodes = [];
  for(var j = 0; j < n; j++){
    var node = nodes[j];
    if(temp.nodes.indexOf(node.id) === -1){
      session.data.clusters.push({
        id: session.data.clusters.length,
        nodes: 0,
        links: 0,
        sum_distances: 0,
        links_per_node: 0,
        mean_genetic_distance: undefined,
        visible: true
      });
      app.DFS(node.id);
    }
  }
  session.data.clusters = session.data.clusters.filter(function(c){ return c.nodes > 1; });
  console.log('Cluster Tagging time:', (Date.now()-start).toLocaleString(), 'ms');
};

app.DFS = function(id){
  if(temp.nodes.indexOf(id) >= 0) return;
  temp.nodes.push(id);
  var node = {};
  var nodes = session.data.nodes;
  var n = nodes.length;
  for(var i = 0; i < n; i++){
    var d = nodes[i];
    if(d.id === id){
      node = d;
      break;
    }
  }
  var lsv = session.style.widgets['link-sort-variable'];
  node.cluster = session.data.clusters.length - 1;
  session.data.clusters[session.data.clusters.length - 1].nodes++;
  var links = session.data.links;
  var m = links.length;
  for(var j = 0; j < m; j++){
    var l = links[j];
    if(l.visible && (l.source === id || l.target === id)){
      l.cluster = session.data.clusters.length - 1;
      var cluster = session.data.clusters[session.data.clusters.length - 1];
      cluster.links++;
      cluster.sum_distances += parseFloat(l[lsv]);
      app.DFS(l.source);
      app.DFS(l.target);
    }
  }
};

app.computeDegree = function(){
  var start = Date.now();
  var nodes = session.data.nodes, links = session.data.links;
  var numNodes = nodes.length;
  for(var h = 0; h < numNodes; h++){
    nodes[h].degree = 0;
  }
  var numLinks = links.length;
  for(var i = 0; i < numLinks; i++){
    var l = links[i];
    if(!l.visible) continue;
    var s = false, t = false;
    for(var j = 0; j < numNodes; j++){
      var node = nodes[j];
      if(node.id === l.source){
        s = true;
        node.degree++;
      }
      if(node.id === l.target){
        t = true;
        node.degree++;
      }
      if(s & t) break;
    }
  }
  session.data.clusters.forEach(function(c){
    c.links = c.links/2;
    c.links_per_node = c.links/c.nodes;
    c.mean_genetic_distance = c.sum_distances/2/c.links;
  });
  console.log('Degree Computation time:', (Date.now()-start).toLocaleString(), 'ms');
};

app.setNodeVisibility = function(){
  var start = Date.now();
  var showSingletons = $('#node-singletons-show').is(':checked');
  var field = $('#date-column').val();
  session.data.nodes.forEach(function(n){
    var cluster = session.data.clusters.find(function(c){ return c.id === n.cluster; });
    n.visible = cluster ? cluster.visible : showSingletons;
    if(session.state.time && field){
      n.visible = n.visible && session.state.time.isAfter(n[field]);
    }
  });
  $window.trigger('node-visibility');
  console.log('Node Visibility Setting time:', (Date.now()-start).toLocaleString(), 'ms');
};

app.setLinkVisibility = function(){
  var start = Date.now();
  var metric  = session.style.widgets['link-sort-variable'],
      threshold = parseFloat($('#link-threshold').val()),
      showNN = $('#links-show-nn').is(':checked');
  session.style.widgets['link-threshold'] = threshold;
  var links = session.data.links;
  var n = links.length;
  for(var i = 0; i < n; i++){
    var link = links[i];
    var v = true;
    if(metric !== 'none') v &= (link[metric] <= threshold);
    if(showNN) v &= link.nn;
    link.visible = v;
    // if(session.data.clusters.length > 0){
    //   //The above condition is a dumb hack to initial load the network
    //   var cluster = session.data.clusters.find(function(c){ return c.id === link.cluster; });
    //   if(cluster) link.visible &= cluster.visible;
    // }
  }
  console.log('Link Visibility Setting time:', (Date.now()-start).toLocaleString(), 'ms');
};

app.getVisibleNodes = function(copy){
  var nodes = session.data.nodes;
  var n = nodes.length;
  var out = [];
  for(var i = 0; i < n; i++){
    var node = nodes[i];
    if(node.visible){
      if(copy){
        out.push(JSON.parse(JSON.stringify(node)));
      } else {
        out.push(node);
      }
    }
  }
  return out;
};

app.getVisibleLinks = function(copy){
  var links = session.data.links;
  var n = links.length;
  var out = [], link = null;
  if(copy){
    for(var i = 0; i < n; i++){
      link = links[i];
      if(link.visible) out.push(JSON.parse(JSON.stringify(link)));
    }
  } else {
    for(var j = 0; j < n; j++){
      link = links[j];
      if(link.visible) out.push(link);
    }
  }
  return out;
};

app.getVisibleClusters = function(copy){
  var clusters = session.data.clusters;
  var n = clusters.length;
  var out = [], cluster = null;
  if(copy){
    for(var i = 0; i < n; i++){
      cluster = clusters[i];
      if(cluster.visible) out.push(JSON.parse(JSON.stringify(cluster)));
    }
  } else {
    for(var j = 0; j < n; j++){
      cluster = clusters[j];
      if(cluster.visible) out.push(cluster);
    }
  }
  return out;
};

// TODO: hideSingletons should be inferred from session.state, not passed.
app.updateNetwork = function(hideSingletons){
  app.setLinkVisibility();
  app.tagClusters();
  if(hideSingletons) app.setNodeVisibility();
  app.computeDegree();
};

app.updateStatistics = function(){
  if($('#network-statistics-hide').is(':checked')) return;
  var vnodes = app.getVisibleNodes();
  var vlinks = app.getVisibleLinks();
  var singletons = vnodes.filter(function(d){ return d.degree === 0; }).length;
  $('#numberOfSelectedNodes').text(vnodes.filter(function(d){ return d.selected; }).length.toLocaleString());
  $('#numberOfNodes').text(vnodes.length.toLocaleString());
  $('#numberOfVisibleLinks').text(vlinks.length.toLocaleString());
  $('#numberOfSingletonNodes').text(singletons.toLocaleString());
  $('#numberOfDisjointComponents').text(session.data.clusters.length);
};

app.createNodeColorMap = function(){
  var variable = session.style.widgets['node-color-variable'];
  if(variable === 'None'){
    temp.style.nodeColorMap = function(){ return session.style.widgets['node-color']; };
    return [];
  }
  var values = _.chain(session.data.nodes)
            .filter(function(d){return d.visible;})
            .pluck(variable)
            .uniq()
            .value();
  if(_.isNumber(session.data.nodes[0][variable])){
    values.sort(function(a, b){ return a - b; });
  } else {
    values.sort();
  }
  if(values.length > session.style.nodeColors.length){
    var colors = [];
    var n = Math.ceil(values.length/session.style.nodeColors.length);
    while(n-- > 0){
      colors = colors.concat(session.style.nodeColors);
    }
    session.style.nodeColors = colors;
  }
  temp.style.nodeColorMap = d3.scaleOrdinal(session.style.nodeColors).domain(values);
  return values;
};

app.createLinkColorMap = function(){
  var variable = session.style.widgets['link-color-variable'];
  if(variable === 'None'){
    temp.style.linkColorMap = function(){ return session.style.widgets['link-color']; };
    return [];
  }
  var values = [];
  if(variable === 'origin'){
    session.data.links.forEach(function(l){
      l.origin.forEach(function(o){
        if(!values.includes(o)) values.push(o);
      });
    });
  } else {
    values = _.chain(session.data.links)
              .filter(function(l){ return l.visible; })
              .pluck(variable)
              .uniq()
              .value();
  }
  if(_.isNumber(session.data.links[0][variable])){
    values.sort(function(a, b){ return a - b; });
  } else {
    values.sort();
  }
  if(values.length > session.style.linkColors.length){
    var colors = [];
    var n = Math.ceil(values.length/session.style.linkColors.length);
    while(n-- > 0) colors = colors.concat(session.style.linkColors);
    session.style.linkColors = colors;
  }
  temp.style.linkColorMap = d3.scaleOrdinal(session.style.linkColors).domain(values);
  return values;
};

app.applyStyle = function(style){
  session.style = style;
  session.style.widgets = Object.assign({}, app.defaultWidgets, session.style.widgets);
  app.createLinkColorMap();
  app.createNodeColorMap();
  var $id = null;
  for(var id in session.style.widgets){
    $id = $('#' + id);
    if($id.length > 0){
      if(['radio', 'checkbox'].includes($id[0].type)){
        if(session.style.widgets[id]) $id.trigger('click');
      } else {
        $id.val(session.style.widgets[id]);
      }
    }
  }
};

app.applySession = function(data, startTime){
  $('#launch').prop('disabled', true);
  self.session = data;
  if(!startTime) startTime = Date.now();
  if(!session.meta) session.meta = {};
  session.meta.startTime = startTime;
  app.applyStyle(session.style);
  app.finishUp(true);
};

app.reset = function(){
  $('#network-statistics-hide').parent().trigger('click');
  $('#SettingsTab').attr('data-target', '#aligner-controls-modal');
  window.session = app.sessionSkeleton();
  layout.unbind('stateChanged');
  layout.root.replaceChild(layout.root.contentItems[0], {
    type: 'stack',
    content: []
  });
  layout.contentItems = [];
  app.launchView('files');
};

app.getMapData = function(type, callback){
  var parts = type.split('.');
  var name = parts[0], format = parts[1];
  if(app.mapData[name]){
    callback();
    return;
  }
  $.get('data/' + type, response => {
    if(format === 'csv'){
      app.mapData[name] = Papa.parse(response, {header: true}).data;
    }
    if(format === 'json'){
      app.mapData[name] = response;
    }
    callback();
  });
};

//adapted from from http://www.movable-type.co.uk/scripts/latlong.html
app.haversine = function(a, b){
  var r = Math.PI / 180;
  var phi1 = a._lat * r;
  var phi2 = b._lat * r;
  var deltalambda = (b._lon - a._lon) * r;
  var deltaphi = (b._lat - a._lat) * r;
  var x = Math.cos(phi1) * Math.cos(phi2) *
          Math.sin(deltalambda/2) * Math.sin(deltalambda/2) +
          Math.pow(Math.sin(deltaphi/2), 2);
  var c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
  return(c * 6378.1); // kilometers
};

app.geoDM = function(){
  var nodes = session.data.nodes;
  var n = nodes.length;
  var dm = Array(n);
  for(var i = 0; i < n; i++){
    dm[i] = Array(n);
    dm[i][i] = 0;
    for(var j = 0; j < i; j++){
      var dist = app.haversine(nodes[i], nodes[j]);
      dm[i][j] = dist;
      dm[j][i] = dist;
    }
  }
  session.data.distance_matrix.geo = dm;
};

//Adapted from https://24ways.org/2010/calculating-color-contrast/
app.contrastColor = function(hexcolor){
	var r = parseInt(hexcolor.substr(1,2),16);
	var g = parseInt(hexcolor.substr(3,2),16);
	var b = parseInt(hexcolor.substr(5,2),16);
	var yiq = (r*299)+(g*587)+(b*114);
	return (yiq >= 128000) ? '#000000' : '#ffffff';
};

app.launchView = function(view, callback){
  if(!app.componentCache[view]){
    $.get('components/' + view + '.html', function(response){
      app.componentCache[view] = response;
      layout.registerComponent(view, function(container, state){
        container.getElement().html(state.text);
      });
      if(callback){
        app.launchView(view, callback);
      } else {
        return app.launchView(view);
      }
    });
  } else {
    var contentItem = layout.contentItems.find(function(item){
      return item.componentName === view;
    });
    if(contentItem){
      contentItem.parent.setActiveContentItem(contentItem);
    } else {
      var lastStack = _.last(layout.root.contentItems[0].getItemsByType('stack'));
      if(!lastStack) lastStack = layout.root.contentItems[0];
      lastStack.addChild({
        componentName: view,
        componentState: {text: app.componentCache[view]},
        title: app.titleize(view),
        type: 'component'
      });
      contentItem = _.last(lastStack.contentItems);
      contentItem.on('itemDestroyed', function(){
        var i = layout.contentItems.findIndex(function(item){
          return item === contentItem;
        });
        layout.contentItems.splice(i, 1);
      });
      layout.contentItems.push(contentItem);
    }
    contentItem.element.find('select.nodeVariables').html(
      '<option>None</option>' +
      session.data.nodeFields.map(function(field){ return '<option value="'+field+'">'+app.titleize(field)+'</option>'; }).join('\n')
    );
    contentItem.element.find('select.linkVariables').html(
      '<option>None</option>' +
      session.data.linkFields.map(function(field){ return '<option value="'+field+'">'+app.titleize(field)+'</option>'; }).join('\n')
    );
    contentItem.element.find('select.mixedVariables').html(
      '<option>None</option>' +
      session.data.linkFields.map(function(field){ return '<option value="links-'+field+'">Links '+app.titleize(field)+'</option>'; }).concat(
      session.data.nodeFields.map(function(field){ return '<option value="nodes-'+field+'">Nodes '+app.titleize(field)+'</option>'; })).join('\n')
    );
    contentItem.element.find('.launch-color-options').click(function(){
      $('#style-tab').tab('show');
      setTimeout(function(){
        $('#global-settings-modal').modal('show');
      }, 250);
    });
    contentItem.element.find('.modal-header').on('mousedown', function(e1){
      var body = $('body');
      var parent = $(this).parent().parent().parent();
      body.on('mousemove', function(e2){
        parent
          .css('top', parseFloat(parent.css('top')) + e2.originalEvent.movementY + 'px')
          .css('left', parseFloat(parent.css('left')) + e2.originalEvent.movementX + 'px');
      });
      body.on('mouseup', function(e3){
        body.off('mousemove').off('mouseup');
      });
    });
    if(navigator.onLine) contentItem.element.find('.ifOnline').show();
    for(var id in session.style.widgets){
      var $id = $('#' + id);
      if($id.length > 0){
        if(['radio', 'checkbox'].includes($id[0].type)){
          if(session.style.widgets[id]) $id.click();
        } else {
          $id.val(session.style.widgets[id]);
        }
      }
    }
    if(callback){
      callback(contentItem);
    } else {
      return contentItem;
    }
  }
};

app.cacheLayout = function(contentItem){
  if(['stack', 'row', 'column'].includes(contentItem.type)){
    return {
      'type': contentItem.type,
      'content': contentItem.contentItems.map(app.cacheLayout)
    };
  }
  return {'type': contentItem.componentName};
};

app.loadLayout = function(component, parent){
  if(!parent){
    parent = layout.root;
    try { parent.contentItems[0].remove(); } catch(e){}
  }
  if(['stack', 'row', 'column'].includes(component.type)){
    parent.addChild({type: component.type});
    component.content.forEach(function(c){ app.loadLayout(c, _.last(parent.contentItems)); });
  } else {
    app.launchView(component.type);
  }
};

app.unparseFASTA = function(nodes){
  return nodes.map(function(node){
    return '>' + node.id + '\r\n' + node.seq;
  }).join('\r\n');
};

app.unparseMEGA = function(nodes){
  return nodes.map(function(node){
    return '#' + node.id + '\r\n' + node.seq;
  }).join('\r\n');
};

app.unparseDM = function(dm){
  var labels = session.data.distance_matrix.labels;
  return ',' + labels.join(',') + '\n' +
    dm
      .map(function(row, i){ return labels[i] + ',' + row.join(','); })
      .join('\n');
};

app.unparseSVG = function(svgNode){
	svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
  var selectorTextArr = [];

  // Add Parent element Id and Classes to the list
  selectorTextArr.push( '#'+svgNode.id );
  var nClasses = svgNode.classList.length;
  for (var c = 0; c < nClasses; c++){
    if (!('.'+svgNode.classList[c]).includes(selectorTextArr)){
      selectorTextArr.push('.'+svgNode.classList[c]);
    }
  }

  // Add Children element Ids and Classes to the list
  var nodes = svgNode.getElementsByTagName('*');
  var nNodes = nodes.length;
  for(var i = 0; i < nNodes; i++){
    var id = nodes[i].id;
    if(!('#'+id).includes(selectorTextArr)){
      selectorTextArr.push( '#'+id );
    }
    var classes = nodes[i].classList;
    for(var d = 0; d < classes.length; d++){
      if(!('.'+classes[d]).includes(selectorTextArr)){
        selectorTextArr.push('.'+classes[d]);
      }
    }
  }

  // Extract CSS Rules
  var extractedCSSText = '';
  var nStylesheets = document.styleSheets.length;
  for (var j = 0; j < nStylesheets; j++) {
    var s = document.styleSheets[j];
    try {
      if(!s.cssRules) continue;
    } catch(e){
      if(e.name !== 'SecurityError') throw e; // for Firefox
      continue;
    }
    var cssRules = s.cssRules;
    var nRules = cssRules.length;
    for (var r = 0; r < nRules; r++) {
      var rule = cssRules[r];
      if(!rule.selectorText) continue;
      if(rule.selectorText.includes(selectorTextArr)){
        extractedCSSText += rule.cssText;
      }
    }
  }

  var styleElement = document.createElement('style');
  styleElement.setAttribute('type', 'text/css');
  styleElement.innerHTML = extractedCSSText;
  var refNode = svgNode.hasChildNodes() ? svgNode.children[0] : null;
  svgNode.insertBefore(styleElement, refNode);
	var serializer = new XMLSerializer();
	return serializer.serializeToString(svgNode);
};

app.blobifySVG = function(svgString, width, height, callback){
	var canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	var image = new Image();
	image.onload = function(){
    var context = canvas.getContext('2d');
		context.clearRect(0, 0, width, height);
		context.drawImage(image, 0, 0, width, height);
		canvas.toBlob(callback);
	};
	image.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
};

app.getHelp = function(target, callback){
  $.get('help/' + target + '.md', function(response){
    callback(marked(response));
  });
};

app.ab2str = function(buf){
  return String.fromCharCode.apply(null, new Uint8Array(buf));
};

app.str2ab = function(str){
  var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
  var bufView = new Uint8Array(buf);
  for(var i=0, strLen=str.length; i < strLen; i++){
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};

app.exportHIVTRACE = function(){
  var links = session.data.links.filter(function(l){ return l.visible });
  var geneticLinks = links.filter(function(l){ return l.origin.includes('Genetic Distance'); });
  var sequences = _.union(
    geneticLinks.map(function(l){ return l.source; }),
    geneticLinks.map(function(l){ return l.target; })
  );
  var pas = {};
  session.data.nodes.forEach(function(d){
    Object.keys(d).forEach(function(key){
      if(pas[key]) return;
      pas[key] = {
        label: key,
        type: app.titleize(typeof d[key])
      }
    });
  });
  return JSON.stringify({
    'trace_results': {
      'Cluster sizes': session.data.clusters.map(function(c){ return c.size; }),
      'Degrees': {
        'Distribution': [],
        'Model': 'Waring',
        'fitted': [],
        'rho': 0,
        'rho CI': [-1, 1]
      },
      'Directed Edges': {
        'Count': 0,
        'Reasons for unresolved directions': {
          'Missing dates': links.length
        }
      },
      'Edge Stages': {},
      'Edges': links.map(function(l){ return {
        'attributes': ['BULK'],
        'directed': false,
        'length': l[session.style.widgets['link-sort-variable']],
        'removed': false,
        'sequences': [l.source, l.target],
        'source': session.data.nodes.findIndex(function(d){ return d.id === l.source; }),
        'support': 0,
        'target': session.data.nodes.findIndex(function(d){ return d.id === l.target; })
      }}),
      'HIV Stages': {
        'A-1': 0,
        'A-2': 0,
        'A-3': 0,
        'Chronic': session.data.nodes.length,
        'E-1': 0,
        'E-2': 0,
        'E-3': 0
      },
      'Multiple sequences': {
        'Followup, days': null,
        'Subjects with': 0
      },
      'Network Summary': {
        'Clusters': session.data.clusters.length,
        'Edges': links.length,
        'Nodes': session.data.nodes.length,
        'Sequences used to make links': sequences.length
      },
      'Nodes': session.data.nodes.map(function(d){ return {
        'attributes': [],
        'baseline': null,
        'cluster': d.cluster,
        'edi': null,
        'id': d.id,
        'patient_attributes': d
      }}),
      'patient_attribute_schema': pas,
      'Settings': {
        'contaminant-ids': [],
        'contaminants': 'remove',
        'edge-filtering': 'remove',
        'threshold': session.style.widgets['link-threshold']
      },
    }
  }, null, 2)
};

app.watermark = 'data:image/png;base64,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';
