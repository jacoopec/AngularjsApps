angular.module('championshipApp', [])
  .controller('ChampionshipController', function($scope, $http) {
    const vm = this; // ✅ Store controller context
    $scope.teams = {};
    vm.teamNames = [''];
    vm.teamNamesF = [];
    $scope.matches = [];

    $scope.match = {
      team1: '', score1: null,
      team2: '', score2: null
    };

    $scope.addMatch = function () {
      const { team1, score1, team2, score2 } = $scope.match;

      const t1 = $scope.teams.find(t => t.name === team1);
      const t2 = $scope.teams.find(t => t.name === team2);

      if (!t1 || !t2) {
        alert("Invalid team names.");
        return;
      }

      const match = {
        team1, score1: parseInt(score1),
        team2, score2: parseInt(score2)
      };

      $http.post('http://localhost:3000/matches', match).then(() => {
        t1.points += match.score1;
        t2.points += match.score2;
        $scope.matches.push(match);
        $scope.match = { team1: '', score1: null, team2: '', score2: null };

        $scope.teams.sort((a, b) => b.points - a.points);
      });
    };

    $scope.getStandings = function() {
      const standings = [];

      for (let teamName in $scope.teams) {
        if ($scope.teams.hasOwnProperty(teamName)) {
          standings.push({
            name: teamName,
            points: $scope.teams[teamName]
          });
        }
      }

      standings.sort((a, b) => b.points - a.points);
      return standings;
    };

    $scope.saveMatches = function() {
      $scope.matches.forEach(match => {
        $http.post('http://localhost:3000/matches', match).then(() => {
          console.log("Match saved:", match);
        });
      });
    };

    $scope.deleteMatch = function(index) {
      const matchToRemove = $scope.matches[index];
      $scope.matches.splice(index, 1);
    };

    $scope.init = function() {
      $http.get('http://localhost:3000/teams').then(function(response) {
        response.data.forEach(team => {
          vm.teamNames.push(team.name); // ✅ use `vm`, not `this`
          $scope.teams[team.name] = team.points;
        });

        console.log(vm.teamNames); // verify output
      });
    };

    $scope.init(); // acts like ngOnInit
  });

