var vmModule = require("./tasks-view-model");

// Event handler for Page "loaded" event attached in tasks.xml
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.tasksViewModel;
	
	vmModule.tasksViewModel.loadTasks();
	
}
exports.onPageLoaded = onPageLoaded;