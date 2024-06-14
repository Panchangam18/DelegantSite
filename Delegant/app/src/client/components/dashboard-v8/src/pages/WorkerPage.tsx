import React from 'react';
import { useParams } from 'react-router-dom';

interface Worker {
  name: string;
  role_description: string;
  working_times_description: string;
}

interface WorkerPageProps {
  workers: Worker[];
}

const WorkerPage: React.FC<WorkerPageProps> = ({ workers }) => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name); // Decode URL-encoded name
  console.log('Decoded Name:', decodedName); // Debugging decoded name
  console.log('Workers:', workers); // Debugging workers array
  const worker = workers.find(worker => worker.name.toLowerCase() === decodedName.toLowerCase());
  console.log('Matched Worker:', worker); // Debugging matched worker

  if (!worker) {
    return <div>Worker not found</div>;
  }

  return (
    <div>
      <h1>Hey, my name is {worker.name}!</h1>
      <p>I am {worker.role_description}.</p>
      <p>And I work in these times: {worker.working_times_description}</p>
    </div>
  );
};

export default WorkerPage;
