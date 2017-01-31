angular.module('quiz').directive('<%= directiveName %>', [function(){
    var tpl = "";
    return {
        restrict: 'E',
        template: tpl,
        replace: true,
        scope: {
            fnPass: "="
        },
        controller: 'Question',
        link: function(scope, el, at){

            // Inject state data ********************
            scope.injectState(/* default Question state data. */);

            // calculateScore ***********************
            scope.score = function(){
                /**
                 * Your should coding implement calculateScore.
                 */
            };

            /* ------------------------- mode checkAnswer -----------------------------*/
            scope.mode = {
                test: function(){

                },
                immediate: function(){

                },
                practice: function(){

                }
            };
        }
    };
}]);
