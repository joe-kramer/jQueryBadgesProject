$(function() {
  $.ajax({
      url: 'https://www.codeschool.com/users/2728572.json',
      dataType: 'jsonp',
      success: function(response) {
        console.log('response', response.courses.completed);
        addCourses(response.courses.completed);
      }
    });

    function addCourses(courses) {

      var $badges = $('#badges');

      for(var i = 0; i < courses.length; i++){
        $(<div)
      }
    }
});
