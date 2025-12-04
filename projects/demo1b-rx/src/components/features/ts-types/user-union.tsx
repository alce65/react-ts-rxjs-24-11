import { Card } from '@components/core/card/card';

type Props =
    | {
          authenticated: true;
          level: 'basic' | 'admin';
          profileData: {
              name: string;
              email: string;
          };
      }
    | {
          authenticated: false;
          level: 'guest';
      };

export const UserUnion: React.FC<Props> = (props: Props) => {
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
