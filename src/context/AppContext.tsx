import { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'landing' | 'manager' | 'resident';
type ManagerTab = 'tasks' | 'legal' | 'insurance';
type ResidentTab = 'rights' | 'insurance';

interface AppState {
  role: UserRole;
  setRole: (role: UserRole) => void;
  managerTab: ManagerTab;
  setManagerTab: (tab: ManagerTab) => void;
  residentTab: ResidentTab;
  setResidentTab: (tab: ResidentTab) => void;
  completedTasks: string[];
  toggleTask: (taskId: string) => void;
  showConsultation: boolean;
  setShowConsultation: (show: boolean) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>('landing');
  const [managerTab, setManagerTab] = useState<ManagerTab>('tasks');
  const [residentTab, setResidentTab] = useState<ResidentTab>('rights');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [showConsultation, setShowConsultation] = useState(false);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        managerTab,
        setManagerTab,
        residentTab,
        setResidentTab,
        completedTasks,
        toggleTask,
        showConsultation,
        setShowConsultation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
