app.controller('FriendController',function($scope,$location,FriendService){
	$scope.friendRequest=function(username){
		FriendService.sendFriendRequest(username)
		.then(function(response){
			alert("Friend request has been sent to " + username)
			getAllUsers();
			$location.path("/getAllUsers")
		},function(response){
			console.log(response.status)
		})
	}
	
	$scope.pendingLists=FriendService.pendingRequests()
	.then(function(response){
		$scope.pendingLists=response.data;
	},function(response){
		console.log(response.status)
	})
	
	$scope.updatependingrequest=function(from,status){
		FriendService.updatependingrequest(from,status)
		.then(function(response){
			if(status=='A')
				alert("your have accepted the friend request")
				else
					alert('you have denied the friend request')
			$location.path('/pendingRequests')
			},function(response){
				console.log(response.status)
			
		
		})
	}
	$scope.friendslist=FriendService.getAllFriends()
	.then(function(response){
		$scope.friendlist=response.data},
		function(response){
			console.log(response.status)
		})
	
	function getAllUsers(){
		$scope.usersList=FriendService.getAllUsers()
		.then(function(response){
			$scope.usersList=response.data
			console.log(response.data)
		},function(response){
			console.log(response.status)
		})
	}
	
	getAllUsers();
})