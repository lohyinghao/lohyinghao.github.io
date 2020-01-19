const Template = (function() {
  return {
    prepare: function(project) {
      return `<div class="container mt-4 col-lg-7">
            <div class="mb-4"><h4>${project.projectName}</h4></div>
        
            <!--<a href=${project.demoLink} target="_blank">-->
            <div class="hovercontainer my-3">
              <img
                src=${project.previewImage}
                style="border:1px solid lightgray"
                alt="Image"
                class="hoverimage"
              />
              <div class="overlay">
                <div class="hovertext">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a
                        href=${project.demoLink}
                        target="_blank"
                        class="btn btn-info m-1"
                        >Demo</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a
                        href=${project.repoLink}
                        target="_blank"
                        class="btn btn-info m-1"
                        >Source Code</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--</a>-->
            <div class="col-md-11 mx-auto">
              <p class="text-justify">
                  ${project.description}
              </p>
            </div>
          </div>`;
    }
  };
})();

const App = (function(Template, data) {
  return {
    init: function() {
      const projectsHtml = data.map(project => Template.prepare(project));
      document.querySelector('#projects').innerHTML = projectsHtml.join(
        '<br/>'
      );
    }
  };
})(Template, data);

App.init();
