// Define Science questions
const MST = [
    {
      question: "Represents a single screen in the app where the user can perform a single focused task such as sending an e-mail.",
      options: ["Intents", "Activity", "Assigment", "Representation"],
      answer: "Activity"
    },
    {
      question: "This are the step to implement an activity except one",
      options: ["Implement a basic UI for the Activity in an associated XML layout file.", 
		"Call the methods to other class.", 
		"Create an Activity Java class.", 
		"Declare the new Activity in AndroidManifest.xml."],
      answer: "Call the methods to other class"
    },
    {
      question: "Presented to the user when the app is launched, it can then start other activities to perform different actions",
      options: ["intent extras", "traget activity", "main activity.", "external activity"],
      answer: "main activity"
    },
    {
      question: "It is the set of states an activity can be in during its entire lifetime",
      options: ["activity life cycle", "traget activity", "main activity.", "external activity"],
      answer: "activity life cycle"
    },
    {
      question: "It is invoked when the app is launched for the first time.",
      options: ["onStart", "onResume", "onRestart.", "onCreate"],
      answer: "onCreate"
    },
    {
      question: "It is invoked before the activity becomes visible to the user.",
      options: ["onStart", "onResume", "onRestart.", "onCreate"],
      answer: "onStart"
    },
    {
      question: "It is invoked before the activity starts interacting with the user.",
      options: ["onResume", "onDestroy", "onRestart.", "onPause"],
      answer: "onResume"
    },
    {
      question: "It is invoked when the system is about to start resuming another activity",
      options: ["onResume", "onDestroy", "onStop.", "onPause"],
      answer: "onPause"
    },
    {
      question: "It is invoked when the activity is no longer visible to the user.",
      options: ["onResume", "onDestroy", "onStop.", "onPause"],
      answer: "onStop"
    },
    {
      question: "The activity is finishing (due to the user completely dismissing the activity or due to finish() being called on the activity)",
      options: ["onRestart", "onDestroy", "onStop.", "onPause"],
      answer: "onDestroy"
    },
    {
      question: "the system is temporarily destroying the activity due to a configuration change (such as device rotation or multi-window mode)",
      options: ["onRestart", "onDestroy", "onStop.", "onPause"],
      answer: "onDestroy"
    },
    {
      question: "It is invoked if the activity comes back after being stopped, it is always followed by onStart().",
      options: ["onRestart", "onDestroy", "onStop.", "onPause"],
      answer: "onRestart"
    },
    {
      question: "Asynchronous message that is used in an activity to request an action from another activity, or from some other app component.",
      options: ["Intents", "Activity", "Assigment", "Representation"],
      answer: "Intents"
    },
    {
      question: "An intent can be used to start one activity from another activity, and to pass data between activities.",
      options: ["True", "False", "Trulse", "Frue"],
      answer: "True"
    },
    {
      question: "The activity that will receive the intent.",
      options: ["Intent extras", "Target intent", "Target activity", "Intent flags"],
      answer: "Target activity"
    },
    {
      question: "Contains a reference to the data you want the receiving activity to operate on.",
      options: ["Intent extras", "Intent data or objects", "Target activity", "Intent flags"],
      answer: "Intent data or objects"
    },
    {
      question: "Carry information the receiving activity requires to accomplish the requested action (optional).",
      options: ["Intent extras", "Intent data or objects", "Target activity", "Intent flags"],
      answer: "Intent extras"
    },
    {
      question: "May instruct the Android system how to launch an Activity or how to treat it after it's launched (optional).",
      options: ["Intent extras", "Intent data or objects", "Target activity", "Intent flags"],
      answer: "Intent flags"
    },
    {
      question: "Types of intent that the target of the intent (the class name of the activity) is already identified.",
      options: ["Implicit intent", "Internal intent", "Explicit intent", "External intent"],
      answer: "Explicit intent"
    },
    {
      question: "Types of intent that the target of the intent is not yet identified but there is a general action to perform, it also includes an action, category, and data type.",
      options: ["Implicit intent", "Internal intent", "Explicit intent", "External intent"],
      answer: "Implicit intent"
    },
    {
      question: "This are the step to add an intent after cerating a new activity except one",
      options: ["Define the method that will be used to start another activity.", 
		"Declare the new Activity in AndroidManifest.xml.", 
		"Add the android:onClick attribute to the Button element that will be used to start another activity", 
		"Invoked before the activity starts interacting with the user."],
      answer: "Invoked before the activity starts interacting with the user."
    },
    {
      question: "Attribute indicates that the main activity is the parent of the second activity. ",
      options: ["intenActivityName", "parentActivityName", "childActivityName", "mainActivityName"],
      answer: "parentActivityName"
    },
    {
      question: "Defines the structure for an app's user interface.",
      options: ["layout", "design", "content", "context"],
      answer: "layout"
    },
    {
      question: "Elements in the layout tha draws something the user can see and interact with",
      options: ["Layout", "Viewgroup", "View", "Context"],
      answer: "view"
    },
    {
      question: "Elements in the layout tha is an invisible container that defines the layout structure for View and other ViewGroup objects",
      options: ["Layout", "Viewgroup", "View", "Context"],
      answer: "ViewGroup"
    },
    {
      question: "One of the ways to cerate layout that the presentation of the app can be separated from the code that controls its behavior",
      options: ["Instantiate layout elements at runtime.", 
		"Draws something the user can see and interact with", 
		"Defines the layout structure for View and other ViewGroup objects", 
		"Declare UI elements in XML"],
      answer: "Declare UI elements in XML"
    },
    {
      question: "One of the ways to cerate layout that the View and ViewGroup objects can be created and their properties can be manipulated programmatically.",
      options: ["Instantiate layout elements at runtime.", 
		"Draws something the user can see and interact with", 
		"Defines the layout structure for View and other ViewGroup objects", 
		"Declare UI elements in XML"],
      answer: "Instantiate layout elements at runtime."
    },
    {
      question: "Is an interface to global information about an application environment. To get the context",
      options: ["Layout", "Content", "View", "Context"],
      answer: "Context"
    },
    {
      question: "Sets the size of the view to the dimensions required by its content",
      options: ["wrap-content", "parent-width", "match-parent", "parent-height"],
      answer: "wrap-content"
    },
    {
      question: "Sets the view to be as big as its parent view group will allow.",
      options: ["wrap-content", "parent-width", "match-parent", "parent-height"],
      answer: "match-content"
    },
    {
      question: "Creates large and complex layouts with a flat view hierarchy (no nested view groups).",
      options: ["Grid Layout", "Relative Layout", "Frame Layout", "Constraint Layout"],
      answer: "Constraint Layout"
    },
    {
      question: "Organizes its child view elements into a single horizontal or vertical row",
      options: ["Web View", "Relative Layout", "Linear Layout", "Constraint Layout"],
      answer: "Linear Layout"
    },
    {
      question: "Is used to specify the location of child objects relative to each other (child A to the left of child B) or to the parent (aligned to the top of the parent)",
      options: ["Web View", "Relative Layout", "Linear Layout", "Constraint Layout"],
      answer: "Relative Layout"
    },
    {
      question: "Used for displaying web pages.",
      options: ["Web View", "Relative Layout", "Linear Layout", "Constraint Layout"],
      answer: "Web View"
    },
    {
      question: "Designed to block out an area on the screen to display a single item.",
      options: ["Web View", "Table Layout", "Frame Layout", "Grid Layout"],
      answer: "Frame Layout"
    },
    {
      question: "Arranges its child objects into rows and columns.",
      options: ["Web View", "Table Layout", "Frame Layout", "Grid Layout"],
      answer: "Table Layout"
    },
    {
      question: "Arranges its child objects in a rectangular grid that can be scrolled.",
      options: ["Web View", "Table Layout", "Frame Layout", "Grid Layout"],
      answer: "Grid Layout"
    },
    {
      question: "A message that Android displays outside the app's UI to provide the user with reminders, communication from other people, or other timely information from the app.",
      options: ["Context", "Message", "Notification", "Content"],
      answer: "Notification"
    },
    {
      question: "Allows to view more details and take actions with the notification.",
      options: ["notification drawer", "notification cabinet", "notification box", "notification wallet"],
      answer: "notification drawer"
    },
    {
      question: "Provides a visual structure and interactive elements that are familiar to users.",
      options: ["app drawer", "app cabinet", "app bar or action bar", "action wallet"],
      answer: "app bar or action bar"
    },
    {
      question: "This are key features of app bar or action bar except one",
      options: ["A dedicated space for giving the app an identity and indicating the user's location in the app", 
		"Access to important actions in a predictable way, such as search", 
		"Support for navigation and view switching (with tabs or dropdown lists)", 
		"Present user actions and other options in the app's activities"],
      answer: "Present user actions and other options in the app's activities"
    },
    {
      question: "Provides simple feedback about an operation in a small popup",
      options: ["Dialog", "Snackbar", "Menu", "Toast"],
      answer: "Toast"
    },
    {
      question: "Provides a quick pop-up message to the user",
      options: ["Dialog", "Snackbar", "Menu", "Toast"],
      answer: "Snackbar"
    },
    {
      question: "A small window that prompts the user to make a decision or enter additional information. It is not designed to fill the screen.",
      options: ["Dialog", "Snackbar", "Menu", "Toast"],
      answer: "Dialog"
    },
    {
      question: "Used to present user actions and other options in the app's activities.",
      options: ["Dialog", "Snackbar", "Menu", "Toast"],
      answer: "Menu"
    },
    {
      question: "One of the two step to create view or widgets",
      options: ["Add visual structure and interactive elements that are familiar to users.", 
		"Define a view/widget in the layout file and assign it a unique ID", 
		"Present user actions and other options in the app's activities.", 
		"Add more details and take actions with the notification."],
      answer: "Define a view/widget in the layout file and assign it a unique ID"
    },
    {
      question: "One of the two step to create view or widgets",
      options: ["Add visual structure and interactive elements that are familiar to users.", 
		"Add more details and take actions with the notification.", 
		"Present user actions and other options in the app's activities.", 
		" Create an instance of the view object and capture it from the layout (typically in the onCreate() method)"],
      answer: " Create an instance of the view object and capture it from the layout (typically in the onCreate() method)"
    },
  ];
  export default MST;
