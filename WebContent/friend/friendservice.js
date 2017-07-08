app.factory('FriendService',function($http){
	var friendService={}
	var BASE_URL="http://localhost:8080/Portal_Backend"
		
		
	friendService.getAllUsers=function(){
		return $http.get(BASE_URL + "/getAllUsers")
	}
	
	friendService.sendFriendRequest=function(username){
		return $http.put(BASE_URL + "/friendRequest/"+ username);
	}
	friendService.pendingRequests=function(){
		return $http.get(BASE_URL + "/pendingRequests");
	}
	friendService.updatependingrequest=function(from,status){
		return $http.put(BASE_URL + "/updatependingrequest/"+from+"/"+status);
	}
	friendService.getAllFriends=function(){
		return $http.get(BASE_URL + "/friendslist");
	}
	return friendService;
})