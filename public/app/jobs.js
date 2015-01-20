/**
 * Created by prabakarangopal on 20/01/2015.
 */

app.factory('jobs',['$resource', function($resource){
    return $resource('/api/jobs/');
}]);