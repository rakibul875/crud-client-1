"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUser = ({ createUserAction }) => {
  return (
    <div className="text-black">
      <Modal>
        <Button variant="secondary">Add user</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-black">
                  Update User
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form action={createUserAction} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label className="text-black">Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" type="email">
                      <Label className="text-black">Email</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" type="tel">
                      <Label className="text-black">Role</Label>
                      <Input placeholder="Enter your Rol" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">Update</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default AddUser;
