function Exercise(args){
  //exercise model
  this.name = args.name;
  this.title = args.title;
  this.description = args.description;
  this.image = args.image;
  this.related = {};
  this.related.videos = args.videos; //why isn't this a part of this.related
  this.nameSound = args.nameSound;
  this.procedure = args.procedure;
}

function WorkoutPlan(args){
  //workout model
  this.exercises = [];
  this.name = args.name;
  this.title = args.title;
  this.restBetweenExercise = args.restBetweenExercise;
}