import { createStackNavigator } from 'react-navigation';
import Login from './../views/Login';
import Dashboard from './../views/Dashboard';
import ChargeForm from '../views/ChargeForm';
import ChargeConfirm from '../views/ChargeConfirm';
import PaylinkForm from '../views/PaylinkForm';
import PaylinkShare from '../views/PaylinkShare';
import PaylinkScan from '../views/PaylinkScan';
import Payauth from '../views/Payauth';
import PayReceipt from '../views/PayReceipt';
import WithdrawalForm from '../views/WithdrawalForm';
import WithdrawalConfirm from '../views/WithdrawalConfirm';
import HistoryScreen from '../views/HistoryScreen';
import BankAccountScreen from '../views/BankAccountScreen';
import BankAccountForm from '../views/BankAccountForm';
import CreateAccount from '../views/CreateAccount';

const RootStack = createStackNavigator(
    {
        Login: Login,
        CreateAccount: CreateAccount,
        Dashboard: Dashboard,
        ChargeForm: ChargeForm,
        ChargeConfirm: ChargeConfirm,
        PaylinkForm: PaylinkForm,
        PaylinkShare: PaylinkShare,
        PaylinkScan: PaylinkScan,
        Payauth: Payauth,
        PayReceipt: PayReceipt,
        WithdrawalForm: WithdrawalForm,
        WithdrawalConfirm: WithdrawalConfirm,
        HistoryScreen: HistoryScreen,
        BankAccountScreen: BankAccountScreen,
        BankAccountForm: BankAccountForm,
    },
    {
        initialRouteName: 'Login',
    }
);


export default RootStack;