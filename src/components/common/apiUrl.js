const worksHost = 'http://127.0.0.1:8888';

export default {
      findPainting: {url: worksHost + '/painting/find'}
    , findAllPainting: {url: worksHost + '/painting/list'}
    , savePainting: {url: worksHost + '/painting/save'}
    , deletePainting: {url: worksHost + '/painting/delete'}
    
}
