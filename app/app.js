(function () {

  'use strict';

  angular.module('ngFlashcards', [])

  .controller('mainController', ['$scope', function($scope) {

    console.log("test");
    $scope.currentCardNum = 0;
    $scope.isAnswerView = false;
    

    $scope.cards = [
        {"question": "Do you like Angular?", "answer": "Yes"},
        {"question": "Do you like JavaScript?", "answer": "No"}
    ]
    $scope.getCard = function(cardNum) {
      console.log("executing getCard with args: " + cardNum);
      $scope.currentCardNum = cardNum;
      console.log($scope.cards[cardNum]);
      $scope.currentCard = $scope.cards[cardNum];
      // Anytime a card is changed display the quesion
      $scope.isAnswerView = false;

    }
    $scope.showAnswer = function(){
      $scope.isAnswerView = true;
    }
    $scope.showQuestion = function(){
      $scope.isAnswerView = false;
    }
    $scope.getCard(0);
    console.log($scope.currentCard);
    console.log($scope.cards[1])

  }]);

}());