app.directive("friendList", function() {
	return {
		restrict: 'E',
		scope: { pessoa: '=' },
		templateUrl: 'js/directives/friendInfo.html'
	};
}); 
