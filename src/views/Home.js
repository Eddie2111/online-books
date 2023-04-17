import { Button } from '@chakra-ui/react'
function Home() {
  return (
    <div>
        home
        <Button colorScheme={"blue"}
        onClick={()=>{alert("you clicked a button!")}}
        >Click me! </Button>
    </div>
  );
}

export default Home;
