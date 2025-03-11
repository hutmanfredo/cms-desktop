import { BrowserRouter, Routes, Route } from 'react-router'
import Members from './pages/members/members'
import Layout from './layouts'
import MembersLayout from './pages/members/membersLayout'
import Dashboard from './pages/dashboard'
import NewMember from './pages/members/newMember'
import Zones from './pages/zones/zones'
import ZonesLayout from './pages/zones/zonesLayout'
import NewZone from './pages/zones/newZones'
import Cells from './pages/cells/cell'
import CellsLayout from './pages/cells/cellLayout'
import NewCell from './pages/cells/newCells'
import DepartmentsLayout from './pages/departments/departmentsLayout'
import Departments from './pages/departments/departments'
import NewDepartment from './pages/departments/newDepartments'
import UpdateDepartment from './pages/departments/updateDepartment'
import UpdateMember from './pages/members/updateMember'
import UpdateZone from './pages/zones/updateZone'
import UpdateCell from './pages/cells/updateCell'
import Attendance from './pages/attendance/attendance'
import AttendanceLayout from './pages/attendance/attendanceLayout'
import UpdateAttendance from './pages/attendance/updateAttendance'
import Finance from './pages/finance/finance'
import FinanceLayout from './pages/finance/financeLayout'
import Branches from './pages/settings/branches/branches'
import BranchesLayout from './pages/settings/branches/branchLayout'
import NewBranch from './pages/settings/branches/newBranch'
import UpdateBranch from './pages/settings/branches/updateBranch'
import Reports from './pages/reports/reports'
import ReportsLayout from './pages/reports/reportsLayout'
import MemberDetail from './pages/members/memberDetail'
import ZoneMembers from './pages/zones/zoneMembers'
import CellMembers from './pages/cells/cellMembers'
import DepartmentMembers from './pages/departments/departmentMembers'
import AttendanceMembers from './pages/attendance/attendanceMembers'
import AttendanceVistors from './pages/attendance/attendanceVisitors'
import NewVisitor from './pages/visitors/newVisitors'
import VisitorsLayout from './pages/visitors/visitorsLayout'
import Visitors from './pages/visitors/visitors'
import UpdateVisitor from './pages/visitors/updateVisitor'
import Income from './pages/finance/income/income'
import Journal from './pages/finance/journal/journal'
import NewIncome from './pages/finance/income/newIncome'
import UpdateIncome from './pages/finance/income/updateIncome'
import NewJournal from './pages/finance/journal/newJournal'
import UpdateJournal from './pages/finance/journal/updateJournal'
import UsersLayout from './pages/settings/users/usersLayout'
import Users from './pages/settings/users/users'
import NewUser from './pages/settings/users/newUser'
import UpdateUser from './pages/settings/users/updateUser'
import CoaLayout from './pages/settings/chartofaccounts/coaLayout'
import Coa from './pages/settings/chartofaccounts/coa'
import EventsLayout from './pages/settings/events/eventsLayout'
import Events from './pages/settings/events/events'
import Expenses from './pages/finance/expenses/expenses'
import Contributions from './pages/finance/contributions/contributions'
import Projects from './pages/finance/projects/projects'
import NewProject from './pages/finance/projects/newProject'
import NewContribution from './pages/finance/contributions/newContribution'
import UpdateContribution from './pages/finance/contributions/updateIContribution'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="" element={<Dashboard />} />
          <Route path="members" element={<MembersLayout />}>
            <Route index path="" element={<Members />} />
            <Route path="memberdetail" element={<MemberDetail />} />
            <Route path="new" element={<NewMember />} />
            <Route path="updatemember" element={<UpdateMember />} />
          </Route>
          <Route path="zones" element={<ZonesLayout />}>
            <Route index path="" element={<Zones />} />
            <Route path="zonemembers" element={<ZoneMembers />} />
            <Route path="newzone" element={<NewZone />} />
            <Route path="updatezone" element={<UpdateZone />} />
          </Route>
          <Route path="cells" element={<CellsLayout />}>
            <Route index path="" element={<Cells />} />
            <Route path="cellmembers" element={<CellMembers />} />
            <Route path="newcell" element={<NewCell />} />
            <Route path="updatecell" element={<UpdateCell />} />
          </Route>
          <Route path="departments" element={<DepartmentsLayout />}>
            <Route index path="" element={<Departments />} />
            <Route path="departmentmembers" element={<DepartmentMembers />} />
            <Route path="newdepartment" element={<NewDepartment />} />
            <Route path="updatedepartment" element={<UpdateDepartment />} />
          </Route>
          <Route path="attendance" element={<AttendanceLayout />}>
            <Route index path="" element={<Attendance />} />
            <Route path="attendancemembers" element={<AttendanceMembers />} />
            <Route path="attendancevistors" element={<AttendanceVistors />} />
            <Route path="updateattendance" element={<UpdateAttendance />} />
          </Route>
          <Route path="visitors" element={<VisitorsLayout />}>
            <Route index path="" element={<Visitors />} />
            <Route path="newvisitor" element={<NewVisitor />} />
            <Route path="updatevisitor" element={<UpdateVisitor />} />
          </Route>
          <Route path="finance" element={<FinanceLayout />}>
            <Route index path="" element={<Finance />} />
            <Route path="income" element={<Income />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="contributions" element={<Contributions />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/finance/newproject" element={<NewProject />} />
            <Route path="/finance/newcontribution" element={<NewContribution />} />
            <Route path="/finance/updatecontribution" element={<UpdateContribution />} />
            <Route path="/finance/newincome" element={<NewIncome />} />
            <Route path="/finance/updateincome" element={<UpdateIncome />} />
            <Route path="journal" element={<Journal />} />
            <Route path="/finance/newjournal" element={<NewJournal />} />
            <Route path="/finance/updatejournal" element={<UpdateJournal />} />
          </Route>
          <Route path="branches" element={<BranchesLayout />}>
            <Route index path="" element={<Branches />} />
            <Route path="newbranch" element={<NewBranch />} />
            <Route path="updatebranch" element={<UpdateBranch />} />
          </Route>
          <Route path="reports" element={<ReportsLayout />}>
            <Route index path="" element={<Reports />} />
          </Route>
          <Route path="events" element={<EventsLayout />}>
            <Route index path="" element={<Events />} />
          </Route>
          <Route path="users" element={<UsersLayout />}>
            <Route index path="" element={<Users />} />
            <Route path="newuser" element={<NewUser />} />
            <Route path="updateuser" element={<UpdateUser />} />
          </Route>
          <Route path="chartofaccount" element={<CoaLayout />}>
            <Route index path="" element={<Coa />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
