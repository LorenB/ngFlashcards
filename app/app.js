var curCard;

(function () {

  'use strict';

  angular.module('ngFlashcards', [])

  .controller('mainController', ['$scope', function($scope) {

    console.log("test");
    $scope.currentCardNum = 0;
    $scope.isAnswerView = false;
    $scope.activeCardsExist = true;
    $scope.currentCard;
    

    $scope.activeCards = [
        {"card_id":"a", "question": "Do you like Angular?", "answer": "Yes", "isCorrect": false},
        {"card_id":"b", "question": "Do you like JavaScript?", "answer": "No", "isCorrect": false},
        {"card_id":"b", "question": "Do you like python?", "answer": "Yes", "isCorrect": false}
    ]
    $scope.inactiveCards = [];
/*
    $scope.attempts = [{"card_id": "", "timestamp": "", "is_correct": ""}];

    $scope.pefrormance = {"count": 0, "total_questions_answered": 0, "rounds": [{"round_id": "", "questions_answered": }] };
    $scope.grading = {};
*/

    $scope.getCard = function() {
      
      /*
      for (var i = 0; i < $scope.activeCards.length; i++) {
        if($scope.activeCards[i]["isCorrect"]==false){
          $scope.activeCards.push($scope.activeCards[i]);
        }
      };

      var maximum = $scope.activeCards.length;
      var minimum = 0;
      var randomnumber = Math.floor(Math.random() * (maximum - minimum)) + minimum;
      console.log(randomnumber);
      
      $scope.currentCard = $scope.activeCards[randomnumber];
      console.log($scope.activeCards);

      // Anytime a card is changed display the quesion
      $scope.isAnswerView = false;
      */
    }

    $scope.setCurrentCard = function(){
      console.log($scope.currentCard);
      if($scope.activeCards.length > 0){
        if(typeof $scope.currentCard != "undefined"){
          console.log("currentCard exists.");
          $scope.activeCards.unshift($scope.currentCard);
        } else {
          console.log("currentCard does not exists.");
        }
        $scope.currentCard = $scope.activeCards.pop();

        $scope.isAnswerView = false;
      } else {
        $scope.activeCardsExist = false;
      }
      curCard = $scope.currentCard;
    }

    $scope.showAnswer = function(){
      $scope.isAnswerView = true;
    }
    $scope.showQuestion = function(){
      $scope.isAnswerView = false;
    }

    $scope.gradeCurrentCard = function(isCorrect){
      $scope.currentCard["isCorrect"] = isCorrect;
      if(isCorrect == true){
        $scope.inactiveCards.push($scope.currentCard);
        $scope.currentCard = undefined;
      } else {
        $scope.activeCards.push($scope.currentCard);
        $scope.currentCard = undefined;
      }
      console.log($scope.activeCards);
      console.log($scope.inactiveCards);
      $scope.setCurrentCard();

    }

    $scope.setCurrentCard();

  }]);

}());