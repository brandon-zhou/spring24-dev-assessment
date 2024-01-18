import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
  
  export default function UserModal({userkey, user, data, setData, update} : {userkey: any, user: any, data: any, setData: any, update: Boolean}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState(user?.name || "");
    const [avatar, setAvatar] = useState(user?.avatar || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [email, setEmail] = useState(user?.email || "");
    const [rating, setRating] = useState(user?.rating || false);
    const [status, setStatus] = useState(user?.status || "");
    const [project, setProject] = useState(user?.hero_project || "");
    useEffect(() => {
      setName(user?.name || "");
      setAvatar(user?.avatar || "");
      setPhone(user?.phone || "");
      setEmail(user?.email || "");
      setRating(user?.rating || false);
      setStatus(user?.status || "");
      setProject(user?.hero_project || "");
    }, [user]);
    const handleSubmit = () => {
      if (userkey === null) {
        let temp = {
          name: name,
          avatar: avatar,
          phone: phone,
          email: email,
          rating: rating,
          status: status,
          hero_project: project,
        }
        setData([...data, temp]);
      } else {
        let dataTemp = [...data];
        let temp = {...data[userkey]};
        temp.name = name;
        temp.avatar = avatar;
        temp.phone = phone;
        temp.email = email;
        temp.rating = rating;
        temp.status = status;
        temp.hero_project = project;
        dataTemp[userkey] = temp;
        setData(dataTemp);
      }
    };

    return (
      <>
        <Button onClick={onOpen} marginBottom={5}>{update ? "Update User" : "New User"}</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Account details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {/* <form onSubmit={handleSubmit}> */}
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder={name}
                    onChange={(input) => setName(input.currentTarget.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Avatar</FormLabel>
                  <Input
                    placeholder={avatar}
                    onChange={(event) => setAvatar(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    placeholder={phone}
                    onChange={(event) => setPhone(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Rating</FormLabel>
                  <Input
                    placeholder={rating}
                    onChange={(event) => setRating(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Status</FormLabel>
                  <Input
                    placeholder={status ? "active" : "inactive"}
                    onChange={(event) => setStatus(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Hero Project</FormLabel>
                  <Input
                    placeholder={project}
                    onChange={(event) => setProject(event.currentTarget.value)}
                  />
                </FormControl>
                <Button colorScheme="blue" mr={3} type="submit" onClick = {()=>{onClose();handleSubmit()}}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }