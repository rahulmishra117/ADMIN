export const APIUrls={
    sendRequest:()=>'http://localhost:8000/api/admin/send',
    
    featchlist :()=>
    'http://localhost:8000/api/admin/data',

    fetchPosts:(page=1,limit=5)=>
    'http://codeial.codingninjas.com:8000/api/v2/posts?page=${page}&limit=${limit}'


}