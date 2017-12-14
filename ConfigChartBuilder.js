var ConfigChartBuilder = function() {
  var a = "Default a";
  var b = "Default b";
   
  return {
      updateAndRefresh : function(another) {
        a = another;
        return this;
      },
      decimalPrecisions : function(another) {
        b = another; 
        return this;
      },
			numberOfDataPointsDisplayed : function(another) {
        a = another;
				b = another; 
        return this;
      },			
      build : function() {
        return "A is: " + a +", B is: " + b;
      }
  };
};
 
var builder = new ConfigChartBuilder();
 
console.log(builder.build());
 
var first = builder.updateAndRefresh("Configurações de updateAndRefresh").decimalPrecisions("Configurações de decimalPrecisions").build();
 
var second = builder.decimalPrecisions("Novas configurações de decimalPrecisions").build();
 
var third = builder.updateAndRefresh("Novas configurações de updateAndRefresh").build();

var fourth = builder.numberOfDataPointsDisplayed("Várias configurações").build();
 
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
