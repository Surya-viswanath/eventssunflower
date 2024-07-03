import { useQuery } from '@tanstack/react-query';

import useAxios from './useAxios';
import { useAuth } from '../auth/AuthContext';

const useAdmin = () => {
    const {user, isLoading} = useAuth()
    const axios = useAxios()

    const {data: isAdmin, isPending: isAdminPending} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        enabled: !isLoading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axios.get(`/check-user-role/${user?.email}`)
            console.log('useadmin',data);
            return data.role
        }
    })
    
    if (isAdmin == "admin") {
        const admin = true
        return [admin,isAdminPending]
    } else{
        const admin = false
        return [admin,isAdminPending]
    }
};

export default useAdmin;