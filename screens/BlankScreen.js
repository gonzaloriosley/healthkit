import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import GetHealthPermissions from '../global-functions/GetHealthPermissions';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';

const BlankScreen = props => {
  const { theme } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        await GetHealthPermissions();
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <Button
        onPress={() => {
          const handler = async () => {
            try {
              await GetHealthPermissions();
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
        style={GlobalStyles.ButtonStyles(theme)['Button']}
        title={'Get Started'}
      />
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
