/**
 * Created by prabakarangopal on 20/01/2015.
 */

describe("posting jobs", function(){

    var postRequestJob;
    var newJob = {title:'test title', description: 'test description'};

    beforeEach(module('app'));

    it("should call /api/job data", inject(function($httpBackend, jobs){
        $httpBackend.whenPOST('/api/jobs', function(data){
            postRequestJob =JSON.parse(data);
            expect(postRequestJob).to.not.be.empty;
            return true;
        }).respond(200);
        jobs.save(newJob);
        $httpBackend.flush();
    }));
});
