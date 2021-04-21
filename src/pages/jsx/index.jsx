import { useState, useEffect } from 'react'
import Search from 'pages/jsx/search';
import List from 'pages/jsx/list';
import { cleanObj } from 'utils/index'
import qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL;

export default () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const res = await fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(param))}`);
        if(res.ok){
            const results = await res.json();
            setList(results)
        }
    }, [param])

    useEffect(async () => {
        const res = await fetch(`${apiUrl}/users`);
        if(res.ok){
            const results = await res.json();
            setUsers(results)
        }
    }, [])

    return <div>
        <Search users={users} param={param} setParam={setParam} />
        <List list={list} users={users} />
    </div>
}