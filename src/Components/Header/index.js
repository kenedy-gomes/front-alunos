import { Box, ButtonGroup, Text, HStack, Image } from "@chakra-ui/react";
import axios from "axios";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, InfoIcon, CloseIcon } from "@chakra-ui/icons";

import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const URL = "http://localhost:8080/alunos/id";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <Box
      bg="gray.100"
      padding={"15px 40px"}
      display={"flex"}
      justifyContent={"space-between"}
      maxWidth="1900px"
    >
      <HStack fontSize={"20px"} fontWeight={"bold"} color={"gray.600"}>
        <Text>Cursos</Text>
      </HStack>
      <ButtonGroup>
        <Menu>
          <p>Bem-vindo, {user}!</p>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<EditIcon />} command="⌘T">
              Editar Perfil
            </MenuItem>
            <MenuItem icon={<InfoIcon />} command="⌘N">
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout} icon={<CloseIcon />} command="⌘⇧N">
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </ButtonGroup>
    </Box>
  );
};

export default Header;
