import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import {useRouter} from 'next/router';

const URL_PREFIX = "/management"
const { Sider } = Layout;
export default function SidebarManager(props){

  const router = useRouter();

  function logout(){
    window.localStorage.clear();
    router.push("/login");
  }

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="flex text-white justify-center w-full h-32 items-center">
        <div>
            {/* TODO: Eventually abstract this out to props */}
          <div>
            Tom Hanks
            <div className="text-xs text-gray-500">t.hanks@citibank.com</div>
          </div>
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[props.selected]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Home",
            onClick: () => { router.replace(URL_PREFIX ) }
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Chat",
            onClick: () => { router.replace(URL_PREFIX + "/chat") }
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Documents",
            onClick: () => { router.replace(URL_PREFIX + "/documents") }
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: "Planner",
            onClick: () => { router.replace(URL_PREFIX + "/planner") }
          },
          {
            key: "5",
            icon: <LogoutOutlined />,
            label: "Logout",
            onClick: () => { logout() }
          },
        ]}
      />
    </Sider>
  );
};
