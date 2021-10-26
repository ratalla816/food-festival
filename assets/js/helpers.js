const dateConverter = function(UNIX_timestamp){
    const a = new Date(UNIX_timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const result =  month + ' ' + date + ', ' + year 
    return result;
  }
  
  const createLoremIpsum = function(numWords = 50) {
    const loremIpsum = "I'm baby iPhone non tofu, pour-over craft beer next level actually tousled commodo. Ex skateboard mollit stumptown, disrupt hexagon activated charcoal. Squid pug irony readymade succulents pickled offal hexagon sunt organic officia church-key everyday carry put a bird on it humblebrag. Pok pok offal ugh occupy voluptate tempor chia."
    
    const result = loremIpsum.split(/\s+/).slice(0,numWords).join(" ");
    return result;
  
  }
  
  module.exports = {
    dateConverter,
    createLoremIpsum
  }