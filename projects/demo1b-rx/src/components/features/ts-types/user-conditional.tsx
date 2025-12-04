import { Card } from "@components/core/card/card";
import type { JSX } from "react";

type Props<T extends boolean> = T extends true
  ? {
      authenticated: true;
      level: 'basic' | 'admin';
      profileData: {
        name: string;
        email: string;
      };
    }
  : {
      authenticated: false;
      level: 'guest';
    };

   export const UserConditional = <T extends boolean>(props: Props<T>) : JSX.Element => {
      if (props.authenticated) {
        return (
          <Card>
            Profile ({props.level})<div>Name: {props.profileData.name}</div>
            <div>Email: {props.profileData.email}</div>
          </Card>
        );
      }
      return <Card>{props.level}</Card>;
    };
    