import * as React from "react";
import { Button, Input, H3, YStack, SizableText, XStack } from "tamagui";
// import { supabase } from "../api/config";

const Signup = ({ navigation }: any) => {
   const [emailAddress, setEmail] = React.useState("");
   const [password, setPassword] = React.useState("");

   const handleSubmit = async () => {
      try {
         // let { data, error } = await supabase.auth.signUp({
         //    email: emailAddress,
         //    password: password,
         // });
         // console.log("====================================");
         // console.log(data, error);
         // console.log("====================================");
      } catch (err: any) {
         console.log("Error:> " + (err.errors ? err.errors[0].message : err));
      }
   };

   React.useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
   }, []);

   // React.useEffect(() => {
   //    const fetchData = async () => {
   //       const { data } = await supabase.auth.getSession();
   //       if (data) {
   //          navigation.replace("Home");
   //       }
   //    };
   //    // call the function
   //    fetchData()
   //       // make sure to catch any error
   //       .catch(console.error);
   // }, []);

   return (
      <>
         <YStack
            theme={"blue"}
            justifyContent="center"
            paddingHorizontal="$5"
            flex={1}
            backgroundColor="$gray1"
            space
         >
            <H3 theme={"blue"} ai={"center"}>
               CREATE AN ACCOUNT
            </H3>

            <Input
               keyboardType="email-address"
               onChangeText={(email) => setEmail(email)}
               size="$5"
               placeholder={`Email`}
            />

            <Input
               secureTextEntry={true}
               onChangeText={(password) => setPassword(password)}
               size="$5"
               placeholder={`Password`}
            />
            <Button
               onPress={() => navigation.replace("Home")}
               theme="blue"
               size="$5"
            >
               Signup
            </Button>
            <XStack ai={"center"}>
               <SizableText theme="blue" size="$4">
                  Already have an account?{" "}
               </SizableText>
               <SizableText
                  color={"$blue10Light"}
                  onPress={() => navigation.replace("Login")}
                  theme="blue"
                  size="$4"
               >
                  Login
               </SizableText>
            </XStack>
         </YStack>
      </>
   );
};

export default Signup;
