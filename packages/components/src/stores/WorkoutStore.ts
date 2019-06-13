import { createContext } from "react";
import { RootStore } from "./RootStore";
import { observable } from "mobx";

type WorkoutDay = 'a' | 'b';

interface WorkoutHistory {
    [key:string]: Array<{
        excercise: string,
        value: number
    }>
}

interface CurrentExercise {
    weight: number;
    reps: number;
    numSets: number;
    exercise: string;
    sets: string[];
}

export class WorkoutStore {

    rootStore:RootStore;

    constructor(rootStore:RootStore){
        this.rootStore = rootStore;
    }

    @observable currentSquat:number;
    @observable currentBenchPress:number;
    @observable currentOverheadPress:number;
    @observable currentDeadlift:number;
    @observable currentBarbellRow:number;

    @observable lastWorkoutType:WorkoutDay;

    @observable currentExcercises: CurrentExercise[] = []

    @observable history:WorkoutHistory;

}

// export const WorkoutStoreContext = createContext( new WorkoutStore());