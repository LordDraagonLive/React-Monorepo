import { RouterStore } from "./RouterStore";
import { WorkoutStore } from "./WorkoutStore";
import { createContext } from "react";
import { WorkoutTimer } from "./WorkoutTimerStore";

export class RootStore{
    routerStore = new RouterStore(this);
    workoutStore = new WorkoutStore(this);
    workoutTimerStore = new WorkoutTimer();

}

export const RootStoreContext = createContext(new RootStore());