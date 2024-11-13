{
  type Something = { something: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, rejects) => {
      const data: Something = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        rejects("Failed to fetch");
      }
    });
  };

  const something = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };
  something();

  interface User {
    userId: number;
    readonly id: number;
    title: string;
    body: string;
  }
  type Users = Array<User>;

  const getPosts = async (): Promise<Users> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };

  const showData = async () => {
      const data = await getPosts();
      console.log(data);
    return data;
  };
  showData();
}
