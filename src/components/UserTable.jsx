'use client'

import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UserTable = ({ users, deleteUserAction }) => {

const handelDelete=async(userId)=>{
    await deleteUserAction(userId)
}


  return (
    <div>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {users?.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    <Link href={`/user/${user._id}`}>
                      <Button variant="secondary">Details</Button>
                    </Link>
                    <Link href={`/user/${user._id}`}>
                      <Button variant="secondary">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <Button variant="danger">Delete</Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading className="text-black">
                                Delete project permanently?
                              </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                This will permanently delete{" "}
                                <strong>My Awesome Project</strong> and all of
                                its data. This action cannot be undone.
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="secondary">
                                Cancel
                              </Button>
                              <Button slot="close" variant="danger" onClick={()=>handelDelete(user._id)}>
                                Delete
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UserTable;
