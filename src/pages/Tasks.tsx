import { AddTaskModal } from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";

export default function Tasks() {
    // baseApi theke data get kora hosse
    const { data, isLoading } = useGetTasksQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    })
    console.log({ data, isLoading });

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-end items-center gap-5">
                <h1 className="mr-auto">Tasks</h1>
                <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="low">Low</TabsTrigger>
                        <TabsTrigger value="medium">Medium</TabsTrigger>
                        <TabsTrigger value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            <div className="space-y-5 mt-5">
                {!isLoading && data?.data?.map((task: ITask) => (
                    <TaskCard task={task} key={task.id} />
                ))}
                {/* {!isLoading && data?.tasks?.map((task: ITask) => (
                    <TaskCard task={task} key={task.id} />
                ))} */}
            </div>
        </div >
    )
}


