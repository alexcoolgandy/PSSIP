angular.module('guitar',[])
	.controller('IndexController', ['$scope', function($scope)
	{	
	
		$scope.getImage = function()
		{
			$scope.guitarSrc = "https://all-guitar.ru/images/classical_guitar.png";
		}
		
		$scope.deleteImage = function()
		{
			$scope.guitarSrc = null;
		}
	}
]);