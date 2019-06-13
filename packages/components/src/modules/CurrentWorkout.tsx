import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
// import { RouterStoreContext } from '../stores/RouterStore';
import { WorkoutCard } from '../ui/workoutCard';
import { RootStoreContext } from '../stores/RootStore';
import { WorkoutTimer } from '../ui/WorkoutTimer';

interface Props {

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa',
        padding: 10
    }
});

export const CurrentWorkout: React.FC<Props>  = observer(() => {
    const rootStore = React.useContext(RootStoreContext);

    React.useEffect(() =>{
        return () => {
            rootStore.workoutTimerStore.stopTimer();
        };
    }, []);
    
    return(
           <View style={styles.container}>
                <Text>Current Workout Page</Text>
                <Button title="Back" onPress={() => {rootStore.routerStore.screen = "WorkoutHistory"}}></Button>
            
                {rootStore.workoutStore.currentExcercises.map(e => {
                    return(
                        <WorkoutCard 
                            onSetPress={setIndex =>{

                                rootStore.workoutTimerStore.startTimer();
                                const v = e.sets[setIndex];

                                let newValue: string;

                                if(v === ""){
                                    newValue = `${e.reps}`;
                                } else if(v === "0"){
                                    rootStore.workoutTimerStore.stopTimer();
                                    newValue = "";
                                }else{
                                    newValue = `${parseInt(v) - 1}`;
                                }

                                e.sets[setIndex] = newValue;
                            }}
                            sets={e.sets} 
                            key={e.exercise}
                            excercise={e.exercise}
                            repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
                        ></WorkoutCard>
                    );
                })}
                {/* Ternary operation to display the timer only when the time is running */}
                {rootStore.workoutTimerStore.isRunning ? <WorkoutTimer
                    percent = {rootStore.workoutTimerStore.percent}
                    currentTime ={rootStore.workoutTimerStore.display}
                    onXPress={ () => rootStore.workoutTimerStore.stopTimer()}
                ></WorkoutTimer>
                : null}
            </View>
    );
});


